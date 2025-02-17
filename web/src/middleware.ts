import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const host = request.headers.get('host') || '';
  const url = nextUrl.clone();

  // Local dev check
  if (host.includes('localhost')) {
    return NextResponse.next();
  }

  // Only handle subdomains of tap-it-on.com
  if (!host.endsWith('.tap-it-on.com')) {
    return NextResponse.next();
  }

  const subdomain = host.replace('.tap-it-on.com', '');

  // Serve main domain or 'www' without rewriting
  if (!subdomain || subdomain === 'www' || subdomain === 'tap-it-on') {
    return NextResponse.next();
  }

  // Rewrite subdomain => /[web_name]
  url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}
