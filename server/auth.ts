import { Router, Request, Response } from "express";
import { getDb, initializeDatabase } from "./db";
import crypto from "crypto";

const router = Router();

// Initialize database on startup
initializeDatabase().catch(console.error);

// Simple password hashing (in production, use bcrypt)
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Login endpoint
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const db = await getDb();

    // Find user by email
    const [users]: any = await db.execute(
      "SELECT id, email, password_hash, stripe_customer_id FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const userData = users[0];

    // Verify password
    const hashedPassword = hashPassword(password);
    if (userData.password_hash !== hashedPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Set session cookie
    res.cookie("sessionId", userData.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // Return user data (without password)
    return res.json({
      id: userData.id,
      email: userData.email,
      stripeCustomerId: userData.stripe_customer_id,
      hasAccess: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Login failed" });
  }
});

// Logout endpoint
router.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("sessionId");
  return res.json({ success: true });
});

// Get current user
router.get("/me", async (req: Request, res: Response) => {
  try {
    const sessionId = req.cookies.sessionId;

    if (!sessionId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const db = await getDb();

    const [users]: any = await db.execute(
      "SELECT id, email, stripe_customer_id FROM users WHERE id = ?",
      [sessionId]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const userData = users[0];

    return res.json({
      id: userData.id,
      email: userData.email,
      stripeCustomerId: userData.stripe_customer_id,
      hasAccess: true,
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return res.status(500).json({ error: "Auth check failed" });
  }
});

export default router;
