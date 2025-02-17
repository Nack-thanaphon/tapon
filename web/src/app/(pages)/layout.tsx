"use client";

import "@/app/front-end.css";
import ReactQueryProvider from "../shared/react-query/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/vercel.svg" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-B9CN5S7MBH"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B9CN5S7MBH');
            `
          }} />
        </head>
        <body>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}