"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const text = "I'm Suraya, a Frontend Web Developer.".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-32 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      {/* Premium glowing background elements */}
      <div className="absolute top-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 dark:bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-teal-400/5 dark:bg-teal-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-slate-200 text-[10px] md:text-sm font-semibold tracking-widest mb-6 md:mb-8 uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#009999]" />
              &mdash;Hello There!
            </motion.div>

            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6 md:mb-8 flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4 gap-y-1 md:gap-y-2">
              {text.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className={word === "Frontend" || word === "Developer." ? "text-gradient block" : "block"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base md:text-xl text-slate-800 dark:text-slate-200 max-w-xl mb-10 md:mb-12 leading-relaxed font-light"
            >
              Passionate frontend developer focused on building visually engaging interfaces with smooth interactions and premium UI design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 md:gap-6 w-full sm:w-auto"
            >
              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="#projects"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300 shadow-[0_0_40px_rgba(0,153,153,0.3)] w-full sm:w-auto"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent dark:bg-[#111111] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 font-medium rounded-full hover:border-primary dark:hover:border-primary transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Me
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Decorative rings behind the image */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 dark:border-primary/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-primary/10 dark:border-primary/5 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-[#0a0a0a] shadow-2xl">
                {/* Image */}
                <img 
                  src="https://i.postimg.cc/KzBXqNnc/Untitled-design-(2)-2.jpg" 
                  alt="Suraya Afroze" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-white dark:bg-[#111] p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 sm:gap-4 z-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base sm:text-xl">
                  🚀
                </div>
                <div>
                  <p className="text-[8px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">Available for</p>
                  <p className="text-[10px] sm:text-sm font-bold text-slate-900 dark:text-white">Freelance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator - Hidden on mobile to prevent overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}