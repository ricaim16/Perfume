// app/admin/sales/page.jsx
import { getAllSales } from "@/lib/actions/sales";
import { getAllUsers } from "@/lib/actions/auth";
import { getAllPerfumes } from "@/lib/actions/perfumes";

export default async function AdminSalesPage() {
  const sales = await getAllSales();
  const users = await getAllUsers();
  const perfumes = await getAllPerfumes();

  function getUserName(id) {
    return users.find((u) => u.id === id)?.name || "Unknown";
  }

  function getPerfumeName(id) {
    return perfumes.find((p) => p.id === id)?.name || "Unknown";
  }

  return (
    <div className="p-6 md:p-10 ml-80 min-h-screen bg-gray-50">
      <h1
        className="text-3xl font-bold mb-6 text-black"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Sales / Orders
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm">
                Perfume
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm">
                Total Price
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium text-sm">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sales.map((sale, index) => (
              <tr
                key={sale.id}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="px-6 py-4 text-gray-800">
                  {getUserName(sale.user_id)}
                </td>
                <td className="px-6 py-4 text-gray-800">
                  {getPerfumeName(sale.perfume_id)}
                </td>
                <td className="px-6 py-4 text-gray-800">{sale.quantity}</td>
                <td className="px-6 py-4 text-gray-800">${sale.total_price}</td>
                <td className="px-6 py-4 text-gray-800">
                  {new Date(sale.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
