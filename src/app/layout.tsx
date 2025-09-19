import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "FOS 2026-IRGR - Thiagarajar School of Management",
  description: "Thiagarajar School of Management, Madurai",
  icons: {
    icon: [
      { url: "/tsmlogo-v2.png", type: "image/png", sizes: "32x32" },
      { url: "/tsmlogo-v2.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: { url: "/tsmlogo-v2.png", type: "image/png" },
    apple: { url: "/tsmlogo-v2.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col max-w-screen max-h-screen min-h-screen bg-gray-50 text-gray-900">
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
