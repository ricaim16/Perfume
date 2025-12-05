// proxy.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecret123changeinproduction";

export async function proxy(request) {
  // Let the login POST request pass through
  if (request.nextUrl.pathname === "/auth/login" && request.method === "POST") {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    try {
      await jwt.verify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/login"],
};
