"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { db } from "../db";
import { users } from "@/drizzle/schema"; // ✅ fixed path

const JWT_SECRET = "supersecret123changeinproduction";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email !== "admin@example.com" || password !== "admin123") {
    return { error: "Wrong email or password" };
  }

  const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "7d" });

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  redirect("/admin");
}

export async function getAllUsers() {
  return await db.select().from(users);
}
