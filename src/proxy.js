// proxy.js
import { NextResponse } from "next/server";

export async function proxy(request) {
  // No auth checks at all
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
