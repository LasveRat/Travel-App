import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Helpers/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel App",
  description: "A travel app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
