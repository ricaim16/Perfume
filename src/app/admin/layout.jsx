// app/admin/layout.jsx
import React from "react";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
