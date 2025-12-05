// lib/upload.js
import { supabase } from "./db";

export async function uploadImage(file) {
  if (!file) return null;

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(fileName, file);

  if (error) {
    console.error("Upload error:", error.message);
    return null;
  }

  // Return public URL
  return `${process.env.SUPABASE_URL}/storage/v1/object/public/images/${fileName}`;
}
