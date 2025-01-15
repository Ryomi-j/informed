import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import AuthContext from "@/lib/components/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "flex flex-col justify-between min-h-screen antialiased bg-gray-100",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
