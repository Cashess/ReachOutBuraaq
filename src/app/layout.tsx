import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";


const poppins = Poppins({ subsets: ["latin"],
weight:["400","500","600","700","800"],
variable:"--font-poppins" });

export const metadata: Metadata = {
  title: "Buraaq",
  description: "Medical Solutions for all",
  icons:{
    icon:"/Group 2.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={poppins.className}>{children}</body>      
    </html>
    </ClerkProvider>
  );
}
