import { createServer, type Server } from "http";
import Stripe from "stripe";
import { getDb, initializeDatabase } from "./db";
import { products } from "../shared/products";
import express, { Express } from "express";
import authRoutes from "./auth";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("STRIPE_SECRET_KEY is not set. Payments will not work.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any,
  typescript: true,
});

export function registerRoutes(app: Express): Server {
  // Initialize database
  initializeDatabase().catch(console.error);

  // Stripe Webhook - MUST be registered before express.json() middleware
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req, res) => {
      const sig = req.headers["stripe-signature"];

      if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.error("STRIPE_WEBHOOK_SECRET is not set");
        return res.status(500).send("Webhook secret not configured");
      }

      let event;

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          sig as string,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }

      // Handle Test Events
      if (event.id.startsWith("evt_test_")) {
        console.log("[Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      try {
        switch (event.type) {
          case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            
            const customerEmail = session.customer_details?.email || session.customer_email;
            const productId = session.metadata?.productId;
            const amount = session.amount_total || 0;
            const paymentIntentId = session.payment_intent as string;
            const stripeCustomerId = session.customer as string;

            if (customerEmail) {
              const db = await getDb();

              try {
                // 1. Check if user exists
                const [existingUsers]: any = await db.execute(
                  "SELECT id, stripe_customer_id FROM users WHERE email = ?",
                  [customerEmail]
                );

                let userId: number;

                if (existingUsers.length === 0) {
                  // Create new user
                  const [result]: any = await db.execute(
                    "INSERT INTO users (email, name, stripe_customer_id) VALUES (?, ?, ?)",
                    [customerEmail, session.customer_details?.name || "Customer", stripeCustomerId]
                  );
                  userId = result.insertId;
                  console.log(`New user created: ${customerEmail}`);
                } else {
                  userId = existingUsers[0].id;
                  // Update Stripe ID if missing
                  if (!existingUsers[0].stripe_customer_id) {
                    await db.execute(
                      "UPDATE users SET stripe_customer_id = ? WHERE id = ?",
                      [stripeCustomerId, userId]
                    );
                  }
                }

                // 2. Create Order
                if (paymentIntentId) {
                  await db.execute(
                    "INSERT INTO orders (user_id, stripe_payment_intent_id, amount, status, product_id) VALUES (?, ?, ?, ?, ?)",
                    [userId, paymentIntentId, amount, "succeeded", productId]
                  );
                  console.log(`Order created for user ${customerEmail}`);
                }
              } catch (dbError: any) {
                console.error("Database error in webhook:", dbError.message);
              }
            }
            break;
          }
          default:
            console.log(`Unhandled event type: ${event.type}`);
        }
      } catch (err: any) {
        console.error("Webhook processing error:", err);
      }

      res.json({ received: true });
    }
  );

  // Create checkout session endpoint
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { productId } = req.body;
      const product = products.find((p) => p.id === productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: product.currency,
              product_data: {
                name: product.name,
                description: product.description,
              },
              unit_amount: product.amount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/#pricing`,
        metadata: {
          productId: product.id,
        },
        allow_promotion_codes: true,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Register auth routes
  app.use("/api/auth", authRoutes);

  const httpServer = createServer(app);
  return httpServer;
}
