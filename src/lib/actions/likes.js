"use server";

import { supabase } from "@/lib/supabase";

// Like a perfume
export async function likePerfumeServer(userId, perfumeId) {
  const { data, error } = await supabase
    .from("likes")
    .insert([{ user_id: userId, perfume_id: perfumeId }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// Unlike a perfume
export async function unlikePerfumeServer(userId, perfumeId) {
  const { data, error } = await supabase
    .from("likes")
    .delete()
    .eq("user_id", userId)
    .eq("perfume_id", perfumeId)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// Get user likes
export async function getUserLikesServer(userId) {
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
  return data;
}
