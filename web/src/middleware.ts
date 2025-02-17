import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const host = request.headers.get('host') || '';
  const url = nextUrl.clone();

  // Check if running in development
  const isDev = host.includes('localhost');

  // If you're on localhost, subdomain logic doesn't really apply unless you specifically
  // map subdomain.localhost to 127.0.0.1 in /etc/hosts. So we can skip rewriting in dev
  // or handle it if you do use subdomain.localhost style testing.
  if (isDev) {
    return NextResponse.next();
  }

  // In production, only handle subdomains of "tap-it-on.com"
  if (!host.endsWith('.tap-it-on.com')) {
    // If it's a completely different domain or custom domain, no rewrite
    return NextResponse.next();
  }

  // Extract the subdomain by removing ".tap-it-on.com"
  const subdomain = host.replace('.tap-it-on.com', ''); // e.g. "abc"

  // If the host is exactly "tap-it-on.com" => subdomain is "tap-it-on"
  // or if host is "www.tap-it-on.com" => subdomain is "www"
  // We want to serve root for these
  if (!subdomain || subdomain === 'www' || subdomain === 'tap-it-on') {
    // Serve the main page (no rewrite)
    return NextResponse.next();
  }

  // Otherwise, rewrite the request to /[web_name]
  // e.g. "abc.tap-it-on.com" => "/abc" + current path
  url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}
