"use client"

import "@/app/front-end.css";
import ReactQueryProvider from "../shared/react-query/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider >
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/vercel.svg" />
        </head>
        <body>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
