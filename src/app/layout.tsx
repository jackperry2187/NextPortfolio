import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react"
import { type Metadata } from "next";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "jackperry2187",
  description: "Jackson Perry's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col min-h-screen max-h-screen">
        <Header />
        <main className="flex flex-grow flex-col items-center bg-slate-800 text-white">
          {children}
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
export default RootLayout;

