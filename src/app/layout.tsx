import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erim Cerrahoglu",
  description: "Software Engineer and tech enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col gap-14 lg:gap-24 " + robotoFlex.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
