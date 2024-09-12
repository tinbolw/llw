import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import SideNav from "@/app/ui/sidenav";

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
      </body>
    </html>
  );
}
