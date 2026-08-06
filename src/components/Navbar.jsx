"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight, Download } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[70] transition-all duration-300 ${
          scrolled ? "py-3 md:py-4" : "py-5 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-12">
          <nav
            className={`flex justify-between items-center px-5 py-2.5 md:px-6 md:py-4 rounded-full transition-all duration-500 ${
              scrolled || isOpen
                ? "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg border border-slate-200/50 dark:border-slate-800/50"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#home" className="text-xl md:text-2xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white relative z-[80]">
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
            <div className="flex items-center gap-2 md:gap-4 relative z-[80]">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label="Toggle Theme"
                >
                  {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              {/* CTA Desktop */}
              <a
                href="/resume.pdf"
                download="Suraya_Afroze_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-sm shadow-primary/20"
              >
                Resume
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMenu}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[60] md:hidden bg-white dark:bg-[#0a0a0a] shadow-2xl flex flex-col pt-32 px-8"
            >
              <div className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActive(l.label.toLowerCase());
                      setIsOpen(false);
                    }}
                    className="text-3xl font-bold font-outfit text-slate-900 dark:text-white flex items-center justify-between group py-2"
                  >
                    {l.label}
                    <ArrowUpRight className="text-primary" size={24} />
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800"
                >
                  <a
                    href="/resume.pdf"
                    download="Suraya_Afroze_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-lg shadow-primary/20"
                  >
                    Resume
                    <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}