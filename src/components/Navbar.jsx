"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav
          className={`flex justify-between items-center px-6 py-3 md:py-4 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-200/50 dark:border-slate-800/50"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white">
            Suraya<span className="text-primary">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.label.toLowerCase())}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  active === l.label.toLowerCase()
                    ? "text-primary dark:text-primary"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {l.label}
                {active === l.label.toLowerCase() && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30"
            >
              Contact Me
            </a>

            {/* Mobile Menu Toggle (Placeholder for future) */}
            <button className="md:hidden text-slate-800 dark:text-slate-200">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}