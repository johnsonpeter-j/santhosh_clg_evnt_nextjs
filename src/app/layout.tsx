import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "FOS 2026-IRGR - Thiagarajar School of Management",
  description: "Thiagarajar School of Management, Madurai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-gray-50 max-w-screen max-h-screen min-h-screen bg-gray-50 text-gray-900">
        {/* App Bar / Header */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
