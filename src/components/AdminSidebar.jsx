// components/AdminSidebar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Package2, ShoppingBag, LayoutDashboard, Menu, X } from "lucide-react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Perfumes", href: "/admin/perfumes", icon: Package2 },
    { name: "Sales", href: "/admin/sales", icon: ShoppingBag },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-black/70 rounded-lg text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-black text-white flex flex-col
          w-64 md:w-80
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {/* Logo Section */}
        <div className="px-6 md:px-10 py-8 md:py-12 border-b border-gray-900">
          <h1
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Perfume Inventory
          </h1>
          <p className="text-xs md:text-sm text-gray-400 tracking-widest uppercase mt-1 md:mt-2 font-light">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 md:px-8 py-6 md:py-10">
          <ul className="space-y-2 md:space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 md:gap-5 px-4 md:px-6 py-3 md:py-5 rounded-2xl 
                               text-gray-300 hover:text-white hover:bg-white/10 
                               transition-all duration-300 
                               font-medium text-sm md:text-base tracking-wide
                               group"
                    onClick={() => setIsOpen(false)} // close on mobile
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 md:px-10 py-6 md:py-8 border-t border-gray-900">
          <p className="text-xs text-gray-600 text-center tracking-wider">
            © 2025 All rights reserved
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
