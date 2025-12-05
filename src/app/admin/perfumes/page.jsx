// src/app/admin/perfumes/page.jsx
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import { getAllPerfumes } from "@/lib/actions/perfumes";

export default async function AdminPerfumeList() {
  const perfumes = await getAllPerfumes();

  return (
    <div className="p-6 md:p-10 ml-80 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1
          className="text-3xl font-bold text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Perfumes
        </h1>

        <Link
          href="/admin/perfumes/create"
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 
                     bg-black text-white text-sm md:text-base font-medium 
                     rounded-xl hover:bg-gray-800 transition shadow-md"
        >
          <svg
            className="w-5 h-5"
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

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider">
                Perfume Name
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider hidden sm:table-cell">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider hidden md:table-cell">
                Size
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider hidden lg:table-cell">
                Price
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm uppercase tracking-wider">
                Notes
              </th>
              <th className="px-6 py-3 text-right text-gray-700 font-medium text-sm uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {perfumes.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-16 text-center text-gray-500 text-base"
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
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 text-gray-900 font-semibold">
                    {p.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800 hidden sm:table-cell">
                    {p.brand || "—"}
                  </td>
                  <td className="px-6 py-4 text-gray-800 hidden md:table-cell">
                    {p.size_ml} ml
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-bold hidden lg:table-cell">
                    {Number(p.price).toFixed(2)} ETB
                  </td>
                  <td
                    className="px-6 py-4 text-gray-700 text-sm truncate max-w-xs"
                    title={p.notes || "No notes"}
                  >
                    {p.notes || "—"}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/perfumes/${p.id}/edit`}
                        className="inline-flex items-center gap-2 px-4 py-2 
                                   bg-gray-600 text-white font-medium text-sm rounded-lg 
                                   hover:bg-gray-700 transition duration-200"
                      >
                        Edit
                      </Link>
                      <DeleteButton perfumeId={p.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
