import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  metadataBase: new URL("https://surayaafroze.vercel.app"),
  title: {
    default: "Suraya Afroze | MERN Stack & Frontend Developer",
    template: "%s | Suraya Afroze",
  },
  description:
    "Portfolio of Suraya Afroze, a passionate MERN Stack and Frontend Web Developer crafting high-performance, modern, and interactive web applications.",
  keywords: [
    "Suraya Afroze",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Portfolio",
    "Khulna Bangladesh",
  ],
  authors: [{ name: "Suraya Afroze", url: "https://github.com/surayaafroze" }],
  creator: "Suraya Afroze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://surayaafroze.vercel.app",
    title: "Suraya Afroze | MERN Stack & Frontend Developer",
    description:
      "Passionate MERN stack developer focused on building visually engaging interfaces with smooth interactions and premium UI design.",
    siteName: "Suraya Afroze Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraya Afroze | MERN Stack & Frontend Developer",
    description:
      "Portfolio of Suraya Afroze, a passionate MERN Stack and Frontend Web Developer creating modern, premium web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
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