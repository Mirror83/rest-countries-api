import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html
      lang="en"
      className="bg-surface dark:bg-surface-dark text-on-container dark:text-on-container-dark"
    >
      <body className={nunitoSans.className}>
        <div className="flex flex-row flex-wrap justify-between items-baseline bg-container dark:bg-container-dark shadow p-8">
          <Link href="/">
            <h1 className="font-bold">Where in the World?</h1>
          </Link>
          <p>Dark Mode</p>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
