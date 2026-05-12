"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiFacebook, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#050505] text-white pt-20 pb-8 relative overflow-hidden border-t border-slate-800 dark:border-slate-800/50">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="font-outfit text-3xl font-bold tracking-tight mb-4 text-white">
              Suraya<span className="text-primary">.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base mb-8">
              Frontend Developer focused on building modern, responsive and
              high-performance web experiences with clean UI and strong UX.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/surayaafroze" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/suraya-afroze/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300" aria-label="Facebook">
                <FiFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Links & Navigation */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="font-semibold text-lg mb-6 text-slate-100">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-slate-100">Say Hello</h4>
              <div className="space-y-4 text-sm text-slate-400 font-medium">
                <a href="mailto:surayaafroze63@gmail.com" className="block hover:text-primary transition-colors">
                  surayaafroze63@gmail.com
                </a>
                <p>Khulna, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 dark:bg-slate-800/50 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Suraya Afroze. Designed & Built with ❤️
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <FiArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}