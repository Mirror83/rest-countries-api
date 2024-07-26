import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "General information on the countries of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          nunitoSans.className,
          "bg-surface dark:bg-surface-dark text-on-container dark:text-on-container-dark"
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
