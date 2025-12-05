// components/LikeButton.jsx
"use client";

import { useState } from "react";
import { likePerfume, unlikePerfume } from "@/lib/actions/likes";

export default function LikeButton({ perfumeId, userId }) {
  const [liked, setLiked] = useState(false);

  async function handleClick() {
    if (!liked) {
      await likePerfume(userId, perfumeId);
      setLiked(true);
    } else {
      await unlikePerfume(userId, perfumeId);
      setLiked(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        liked ? "bg-red-500 text-white" : "bg-gray-300"
      }`}
    >
      {liked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
}
