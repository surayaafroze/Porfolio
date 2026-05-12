"use client";

import { motion } from "framer-motion";
import { Code2, MonitorPlay, Sparkles, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-[#0f0f0f]">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 dark:from-teal-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            About Me
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Behind the <span className="text-gradient">Code</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Main Intro - spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <User size={24} />
            </div>
            <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Passionate Frontend Developer
            </h3>
            <div className="space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed font-light text-lg">
              <p>
                I am a dedicated frontend developer focused on building modern, animated, and user-friendly web experiences using React, Next.js, and modern web technologies.
              </p>
              <p>
                Currently based in Khulna, Bangladesh, I love creating visually engaging interfaces that combine premium UI design with buttery-smooth interactions.
              </p>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Core Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card md:col-span-1 lg:col-span-2"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <MonitorPlay size={24} />
            </div>
            <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-2">
              Modern UI/UX
            </h3>
            <p className="text-slate-800 dark:text-slate-200 font-light leading-relaxed">
              Crafting sleek, accessible, and highly interactive interfaces that provide seamless user journeys and "Awwwards-level" quality.
            </p>
          </motion.div>

          {/* Stats / Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card bg-primary text-white border-none group-hover:border-none flex flex-col items-center justify-center text-center"
          >
            <div className="font-outfit text-5xl font-bold mb-2 text-slate-900 dark:text-white">1+</div>
            <div className="font-medium text-sm tracking-wider uppercase  text-slate-900 dark:text-white">Years Experience</div>
            
            {/* Overlay glow */}
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card flex flex-col items-center justify-center text-center"
          >
            <div className="font-outfit text-5xl font-bold text-slate-900 dark:text-white mb-2">10+</div>
            <div className="text-slate-700 dark:text-slate-300 font-medium text-sm tracking-wider uppercase">Projects Built</div>
          </motion.div>

          {/* Animation Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bento-card md:col-span-3 lg:col-span-2 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700">
              <Sparkles className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-2">
                Motion & Animation
              </h3>
              <p className="text-slate-800 dark:text-slate-200 font-light">
                Specializing in GSAP, Framer Motion, and smooth scrolling to bring static designs to life.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}