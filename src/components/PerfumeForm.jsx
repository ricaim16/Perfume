"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PerfumeForm({ initialData = {}, action }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    brand: initialData.brand || "",
    size_ml: initialData.size_ml || "",
    price: initialData.price || "",
    notes: initialData.notes || "",
    image: initialData.image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedData = {
      ...formData,
      size_ml: parseInt(formData.size_ml, 10) || 0,
      price: parseFloat(formData.price) || 0,
    };
    if (action) {
      await action(cleanedData);
      router.push("/admin/perfumes");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-xl mx-auto font-sans"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-900"
        >
          Perfume Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Baccarat Rouge 540"
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Brand */}
      <div>
        <label
          htmlFor="brand"
          className="block text-lg font-medium text-gray-900"
        >
          Brand
        </label>
        <input
          id="brand"
          name="brand"
          type="text"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Maison Francis Kurkdjian"
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Size & Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Size (ml) */}
        <div>
          <label
            htmlFor="size_ml"
            className="block text-lg font-medium text-gray-900"
          >
            Size (ml)
          </label>
          <input
            id="size_ml"
            name="size_ml"
            type="number"
            min="0"
            required
            value={formData.size_ml}
            onChange={handleChange}
            placeholder="100"
            className="mt-1 w-5/6 px-4 py-3 border-none bg-gray-50 rounded-lg shadow-sm
                       text-gray-900 placeholder-grey
                       focus:outline-none focus:ring-0 focus:bg-gray-100 transition"
          />
        </div>

        {/* Price  */}
        <div>
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-900"
          >
            Price 
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            required
            value={formData.price}
            onChange={handleChange}
            placeholder="285.00"
            className="mt-1 w-5/6 px-4 py-3 border-none bg-gray-50 rounded-lg shadow-sm
                       text-gray-900 placeholder-grey
                       focus:outline-none focus:ring-0 focus:bg-gray-100 transition"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-lg font-medium text-gray-900"
        >
          Notes 
        </label>
        <input
          id="notes"
          name="notes"
          type="text"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Saffron, Jasmine Sambac, Amberwood..."
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Image URL */}
      <div>
        <label
          htmlFor="image"
          className="block text-lg font-medium text-gray-900"
        >
          Image URL (optional)
        </label>
        <input
          id="image"
          name="image"
          type="url"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-3 rounded-lg
                     hover:bg-gray-900 active:scale-[0.97] transition-transform duration-200 shadow-lg"
        >
          {initialData.name ? "Update Perfume" : "Add Perfume"}
        </button>
      </div>
    </form>
  );
}
