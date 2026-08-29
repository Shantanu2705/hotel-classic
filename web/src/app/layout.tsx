import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Classic | Luxury Stay in Siliguri",
  description: "Experience premium comfort and hospitality at Hotel Classic (Classic Lodge). Located near NJP Station, Siliguri. Enjoy AC/Non-AC rooms, 24-hour service, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
