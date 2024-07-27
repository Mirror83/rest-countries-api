import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const ThemedMain = dynamic(() => import("@/components/ThemedMain"), {
  ssr: false,
});

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

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
      <body className={cn(nunitoSans.className, "flex flex-col")}>
        <ThemedMain className="bg-surface dark:bg-surface-dark text-on-container dark:text-on-container-dark min-h-screen">
          {children}
        </ThemedMain>
      </body>
    </html>
  );
}
