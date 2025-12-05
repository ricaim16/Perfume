// layout.jsx
import "./globals.css";

export const metadata = {
  title: "Perfume Inventory",
  description: "Manage and browse perfumes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
