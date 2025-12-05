// components/BuyButton.jsx
"use client";

import { createSale } from "@/lib/actions/sales";

export default function BuyButton({ perfumeId, userId }) {
  async function handleBuy() {
    const quantity = 1; // default purchase quantity
    await createSale({
      user_id: userId,
      perfume_id: perfumeId,
      quantity,
      total_price: 0,
    });
    alert("Perfume purchased!");
  }

  return (
    <button
      onClick={handleBuy}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      🛒 Buy
    </button>
  );
}
