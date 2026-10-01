import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Ignore static assets, api routes, next internal files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // favicon.ico, images etc.
  ) {
    return NextResponse.next();
  }

  // Check if request is coming from games subdomain (e.g. games.arklineteknoloji.com, games.localhost:3000)
  const isGamesSubdomain = host.startsWith("games.");

  if (isGamesSubdomain) {
    // If user accesses root on games subdomain, rewrite to /games
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/games", request.url));
    }
    // If path doesn't already start with /games, rewrite under /games
    if (!pathname.startsWith("/games")) {
      return NextResponse.rewrite(new URL(`/games${pathname}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
