import "../globals.css";
import Nav from "@/lib/components/nav";
import { Footer } from "@/lib/components/footer";
import { Fragment } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Nav />
      <main className="grow">{children}</main>
      <Footer />
    </Fragment>
  );
}
