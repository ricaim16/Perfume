// src/app/admin/perfumes/page.jsx

// THESE TWO LINES ARE THE MAGIC → FORCE FRESH DATA ON VERCEL EVERY TIME
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import { getAllPerfumes } from "@/lib/actions/perfumes";

export default async function AdminPerfumeList() {
  const perfumes = await getAllPerfumes();

  return (
    <div className="p-4 sm:p-6 md:p-10 ml-0 md:ml-80 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        <h1
          className="text-2xl sm:text-3xl font-bold text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Perfumes
        </h1>

        <Link
          href="/admin/perfumes/create"
          className="mt-3 sm:mt-0 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
                     bg-black text-white text-sm sm:text-base font-medium 
                     rounded-xl hover:bg-gray-800 transition shadow-md"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Perfume
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                No.
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Perfume Name
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider hidden md:table-cell">
                Brand
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider hidden lg:table-cell">
                Size
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider hidden xl:table-cell">
                Price
              </th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Notes
              </th>
              <th className="px-4 py-2 text-right text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {perfumes.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-16 text-center text-gray-500 text-sm sm:text-base"
                >
                  No perfumes found. Click "Add Perfume" to get started.
                </td>
              </tr>
            ) : (
              perfumes.map((p, index) => (
                <tr
                  key={p.id}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-3 text-gray-800 font-medium text-sm">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-semibold text-sm sm:text-base">
                    {p.name}
                  </td>
                  <td className="px-4 py-3 text-gray-800 text-sm hidden md:table-cell">
                    {p.brand || "—"}
                  </td>
                  <td className="px-4 py-3 text-gray-800 text-sm hidden lg:table-cell">
                    {p.size_ml} ml
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-bold text-sm hidden xl:table-cell">
                    {Number(p.price).toFixed(2)} ETB
                  </td>
                  <td
                    className="px-4 py-3 text-gray-700 text-xs sm:text-sm truncate max-w-xs"
                    title={p.notes || "No notes"}
                  >
                    {p.notes || "—"}
                  </td>
                  <td className="px-4 py-3 text-right flex flex-col sm:flex-row items-end sm:items-center justify-end gap-2">
                    <Link
                      href={`/admin/perfumes/${p.id}/edit`}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-gray-600 text-white font-medium text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition duration-200"
                    >
                      Edit
                    </Link>
                    <DeleteButton perfumeId={p.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {perfumes.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            No perfumes found. Click "Add Perfume" to get started.
          </p>
        ) : (
          perfumes.map((p, index) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900">{p.name}</span>
                <span className="text-gray-500 text-sm">{index + 1}</span>
              </div>
              {p.brand && (
                <p className="text-gray-700 text-sm">Brand: {p.brand}</p>
              )}
              <p className="text-gray-700 text-sm">Size: {p.size_ml} ml</p>
              <p className="text-gray-900 font-semibold text-sm">
                Price: {Number(p.price).toFixed(2)} ETB
              </p>
              <p
                className="text-gray-700 text-sm truncate"
                title={p.notes || "No notes"}
              >
                Notes: {p.notes || "—"}
              </p>
              <div className="flex justify-end gap-2 mt-2">
                <Link
                  href={`/admin/perfumes/${p.id}/edit`}
                  className="px-3 py-1 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                >
                  Edit
                </Link>
                <DeleteButton perfumeId={p.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
