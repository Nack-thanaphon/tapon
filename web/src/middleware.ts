import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''; 
  const url = request.nextUrl.clone();

  // Check if running in development or production
  const isDevelopment = host.includes('localhost');

  // Extract subdomain
  let subdomain = '';
  if (isDevelopment) {
    // In development, subdomain is the first part of the hostname before the port
    const parts = host.split(':');
    subdomain = parts[0].split('.')[0];
  } else {
    // In production, subdomain is the first part of the hostname
    subdomain = host.split('.')[0];
  }

  // Only apply logic if it’s your domain in production or localhost in development
  if (isDevelopment || host.endsWith('tap-it-on.com')) {
    // If no subdomain or it's "www", serve the root app (no rewrite)
    if (!subdomain || subdomain === 'www' || subdomain === 'localhost') {
      return NextResponse.next();
    }

    // Otherwise, rewrite to /[web_name] with subdomain as the path
    url.pathname = `/${subdomain}${url.pathname}`; 
    // For example, "abc.tap-it-on.com" goes to "/abc"

    return NextResponse.rewrite(url);
  }

  // If it’s some other domain or custom domain, do nothing special
  return NextResponse.next();
}