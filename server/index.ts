import express from "express";
import type { Express } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { registerRoutes } from "./routes";
import cookieParser from "cookie-parser";

async function startServer() {
  const app = express();
  
  // Important: registerRoutes handles the webhook route which needs raw body
  // We apply standard JSON parsing for other routes afterwards
  app.use((req, res, next) => {
    if (req.path === '/api/stripe/webhook') {
      next();
    } else {
      express.json()(req, res, next);
    }
  });
  
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  const server = registerRoutes(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ message: "API route not found" });
    }
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(Number(port), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
