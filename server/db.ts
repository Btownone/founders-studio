import { createConnection, Connection } from 'mysql2/promise';
import { z } from 'zod';

let dbConnection: Connection | null = null;

export async function getDb(): Promise<Connection> {
  if (!dbConnection) {
    dbConnection = await createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'webdev_db',
    });
  }
  return dbConnection;
}

// Schema definitions for validation
export const insertUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  passwordHash: z.string().optional(),
  stripeCustomerId: z.string().optional(),
});

export const selectUserSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string().nullable(),
  passwordHash: z.string().nullable(),
  stripeCustomerId: z.string().nullable(),
  createdAt: z.date().nullable(),
});

export const insertOrderSchema = z.object({
  userId: z.number().optional(),
  stripePaymentIntentId: z.string(),
  amount: z.number(),
  status: z.string(),
  productId: z.string().optional(),
});

export const selectOrderSchema = z.object({
  id: z.number(),
  userId: z.number().nullable(),
  stripePaymentIntentId: z.string(),
  amount: z.number(),
  status: z.string(),
  productId: z.string().nullable(),
  createdAt: z.date().nullable(),
});

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;
export type Order = z.infer<typeof selectOrderSchema>;
export type NewOrder = z.infer<typeof insertOrderSchema>;

// Mock table objects for compatibility
export const users = { tableName: 'users' };
export const orders = { tableName: 'orders' };

// Initialize database tables on startup
export async function initializeDatabase() {
  const db = await getDb();
  
  try {
    // Create users table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        password_hash VARCHAR(255),
        stripe_customer_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create orders table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        stripe_payment_intent_id VARCHAR(255) UNIQUE NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(50) NOT NULL,
        product_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    console.log('✅ Database tables initialized');
  } catch (error: any) {
    console.error('❌ Database initialization error:', error.message);
  }
}
