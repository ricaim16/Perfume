// components/AdminSidebar.jsx
"use client";

import Link from "next/link";
import { Package2, ShoppingBag, LayoutDashboard } from "lucide-react";

export default function AdminSidebar() {
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Perfumes", href: "/admin/perfumes", icon: Package2 },
    { name: "Sales", href: "/admin/sales", icon: ShoppingBag },
  ];

  return (
    <aside className="fixed left-0 top-0 w-80 h-screen bg-black text-white flex flex-col">
      {/* Logo Section */}
      <div className="px-10 py-12 border-b border-gray-900">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Perfume Inventory
        </h1>
        <p className="text-sm text-gray-400 tracking-widest uppercase mt-2 font-light">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-8 py-10">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-5 px-6 py-5 rounded-2xl 
                             text-gray-300 hover:text-white hover:bg-white/10 
                             transition-all duration-300 
                             font-medium text-base tracking-wide
                             group"
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Optional subtle footer text (no logout) */}
      <div className="px-10 py-8 border-t border-gray-900">
        <p className="text-xs text-gray-600 text-center tracking-wider">
          © 2025 All rights reserved
        </p>
      </div>
    </aside>
  );
}
