// src/lib/actions/sales.js
"use server";

import { db } from "@/lib/db";
import { sales } from "@/drizzle/schema";

// Create a sale
export async function createSale(data) {
  return db.insert(sales).values(data).returning();
}

// Get all sales
export async function getAllSales() {
  return db.select().from(sales);
}

