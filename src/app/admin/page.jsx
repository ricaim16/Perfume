// src/app/admin/page.jsx
import { getAllPerfumes } from "@/lib/actions/perfumes";
import { getAllSales } from "@/lib/actions/sales";
import { Package2, ShoppingBag, Receipt } from "lucide-react";

export default async function AdminDashboard() {
  let perfumes = [];
  let sales = [];
  let error = null;

  try {
    [perfumes, sales] = await Promise.all([getAllPerfumes(), getAllSales()]);
  } catch (err) {
    console.error("Failed to fetch data:", err);
    error = "Failed to load dashboard data.";
  }

  const totalOrders = sales.length;
  const totalItemsSold = sales.reduce(
    (acc, s) => acc + Number(s.quantity || 0),
    0
  );
  const totalPerfumes = perfumes.length;

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: Receipt,
      color: "text-blue-700",
      bg: "bg-blue-100",
    },
    {
      title: "Items Sold",
      value: totalItemsSold,
      icon: ShoppingBag,
      color: "text-emerald-700",
      bg: "bg-emerald-100",
    },
    {
      title: "Perfumes",
      value: totalPerfumes,
      icon: Package2,
      color: "text-amber-700",
      bg: "bg-amber-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Smooth responsive layout */}
      <div className="p-6 md:p-10 lg:ml-72 transition-all duration-300">
        {/* Luxury header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-2 font-light">
            Monitor your perfume store performance
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className={`rounded-xl p-6 ${stat.bg} border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-700">
                      {stat.title}
                    </p>

                    <p className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-xl bg-white shadow ${stat.color}`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
