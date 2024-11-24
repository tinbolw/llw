import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import SideNav from "@/app/ui/client/sidenav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// could try adding Hack font, more detailed title showing route?

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LLW",
  description: "Ling Ling Website",
};
// todo add general padding for all links?
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-2`}
      >
        <SideNav/>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
