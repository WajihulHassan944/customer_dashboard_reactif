import type { Metadata } from "next";
import "./globals.css";
import { onest } from "@/lib/fonts";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Super Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} bg-neutral-800 min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
