import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import { SidebarProvider } from "@/components/SideMenu/SidebarContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Core Project",
  description: "Personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <SidebarProvider>
        <body
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          className="antialiased"
        >
          <Layout>{children}</Layout>
        </body>
      </SidebarProvider>
    </html>
  );
}
