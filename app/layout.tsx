import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Northwinds College - Liberal Arts Education Excellence",
  description: "A premier liberal arts college offering diverse programs in humanities, sciences, arts, and social sciences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://embed.showpilot.com/js/app.js?ptkn=Ng=="
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


