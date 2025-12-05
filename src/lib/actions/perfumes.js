"use server";

import { db } from "@/lib/db";
import { perfumes } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

// Create a new perfume
export async function createPerfume(data) {
  const result = await db.insert(perfumes).values(data).returning();
  return result[0];
}

// Update an existing perfume by ID
export async function updatePerfume(id, data) {
  if (!id) throw new Error("Perfume ID is required");
  const result = await db
    .update(perfumes)
    .set(data)
    .where(eq(perfumes.id, id))
    .returning();
  return result[0];
}

// Delete a perfume by ID
export async function deletePerfume(id) {
  if (!id) throw new Error("Perfume ID is required");
  return db.delete(perfumes).where(eq(perfumes.id, id));
}

// Get all perfumes
export async function getAllPerfumes() {
  return db.select().from(perfumes);
}

// Get a single perfume by ID
export async function getPerfumeById(id) {
  if (!id) return null;
  const result = await db.select().from(perfumes).where(eq(perfumes.id, id));
  return result[0] || null;
}
