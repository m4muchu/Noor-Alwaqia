import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/footer";
import { COMPANY_FULL_NAME } from "./consts/company-details";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: COMPANY_FULL_NAME,
  description: "Connecting worlds Empowering Nations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
