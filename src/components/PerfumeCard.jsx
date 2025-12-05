"use client";

import { useState } from "react";

export default function PerfumeCard({ perfume, onAddToCart }) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(perfume);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 w-full max-w-sm mx-auto">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={perfume.image || "/placeholder.png"}
          alt={perfume.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Name (left) + Brand (right) */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
            {perfume.name}
          </h2>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {perfume.brand}
          </span>
        </div>

        {/* Size & Price */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-600 font-medium">
            {perfume.size_ml} ml
          </span>
          <span className="text-2xl font-bold text-gray-900">
            {Number(perfume.price || 0).toFixed(2)}ETB
          </span>
        </div>

        {/* BLACK BUTTON WITH WHITE CART ICON (pure SVG – works instantly) */}
        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-black hover:bg-gray-900 text-white font-medium tracking-wider uppercase text-sm rounded-xl 
                     flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl active:scale-98"
        >
          {/* White Shopping Cart SVG */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h13l-1.5-6M7 13l-3 9m3-9h14"
            />
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="20" cy="21" r="1.5" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
