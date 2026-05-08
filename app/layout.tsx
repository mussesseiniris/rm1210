import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Jersey_25_Charted } from "next/font/google"





export const metadata: Metadata = {
  title: "Iris's Portfolio",
  description: "Software Developer Portfolio",
   icons: {
   icon: "/rm1210/favicon.png",        
  },
};
const playfair = Playfair_Display({ subsets: ["latin"] });
const jersey= Jersey_25_Charted({ subsets: ["latin"],weight: "400" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}