import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Check if the subdomain is valid and not the main domain
  if (subdomain && subdomain !== 'www' && subdomain !== 'tap-on-it.com') {
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // If no subdomain, proceed as normal
  return NextResponse.next();
}