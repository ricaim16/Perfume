// src/app/auth/login/page.js
import { loginUser } from "@/lib/actions/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Login</h1>

        <form action={loginUser} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="admin@example.com"
            defaultValue="admin@example.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            name="password"
            type="password"
            placeholder="admin123"
            defaultValue="admin123"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            Login → Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
