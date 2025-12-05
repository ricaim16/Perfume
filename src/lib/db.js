// src/lib/db.js
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing! Check .env.local");
}

// Singleton for serverless environments (Vercel)
let client;

if (!global.__db__) {
  client = postgres(connectionString, { prepare: false });
  global.__db__ = drizzle(client);
}

export const db = global.__db__;
