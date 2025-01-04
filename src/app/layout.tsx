import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Nav from "@/lib/components/nav";
import { Footer } from "@/lib/components/footer";

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
          "flex flex-col justify-between min-h-screen max-w-screen-xl mx-auto antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Nav />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
