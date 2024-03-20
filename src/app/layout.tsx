import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/libs/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Express",
  description: "Streamlined Car Rental & Service Platform | Designed & Developed by Fahim Muntashir, Software Engineer and Designer in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="">
        <h1 className="text-orange-900 bg-green-400">Navbar</h1>
        <p></p>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
