import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zebri",
  description: "Your AI Wedding Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
