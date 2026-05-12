import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Suraya Afroze | Frontend Developer",
  description: "Portfolio of Suraya Afroze, a passionate Frontend Web Developer creating modern, premium web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-slate-200 antialiased overflow-x-hidden transition-colors duration-300">
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}