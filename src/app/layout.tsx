import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/footer";
import { COMPANY_FULL_NAME } from "./consts/company-details";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: COMPANY_FULL_NAME,
  description:
    "Welcome to Noor AlWaqiah Trading, your premier partner in global trade solutions. With a steadfast commitment to excellence, we specialize in facilitating the seamless exchange of goods across international borders. Leveraging our extensive network, industry expertise, and innovative logistics, we empower businesses to expand their reach and maximize growth opportunities in the global marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
