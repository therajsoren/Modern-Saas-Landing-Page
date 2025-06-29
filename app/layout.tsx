import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description: "Modern Saas Landing Page",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.className} antialiased`}
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="bg-neutral-950 w-full text-center p-2 sm:inline-block hidden">
          <span className="text-[#5d5d5d] text-sm">Streamline your workflow and boost your productivity.</span>
          <span className="text-neutral-100 text-sm pl-1">  Get started for free <FaArrowRight className="inline h-4 w-3"/> </span>
        </div>
        {children}
      </body>
    </html>
  );
}
