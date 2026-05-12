"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Lin",
    role: "CEO, Finly",
    text: "The level of polish and attention to detail is outstanding. Our product feels 10x better after the redesign.",
  },
  {
    name: "Marcus Reed",
    role: "Founder, Northwind",
    text: "She turned our messy ideas into a clean, modern, and user-friendly product. Highly recommended!",
  },
  {
    name: "Amélie Roux",
    role: "Head of Product",
    text: "Working together felt like having a senior designer in our team. Fast, creative, and reliable.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Testimonials
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900"
          >
            Kind words from <span className="text-gradient">clients</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden flex flex-col justify-between min-h-[260px] group"
            >
              {/* 🔥 PREMIUM BLOB BACKGROUND */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute top-12 -right-4 w-32 h-32 bg-primary/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none"
              />

              {/* soft glow layer */}
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-teal-400/10 blur-[30px] rounded-full group-hover:bg-teal-400/20 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="text-6xl text-primary/20 font-serif leading-none mb-4 group-hover:text-primary/40 transition-colors duration-300">
                  “
                </div>

                {/* Text */}
                <p className="text-slate-600 leading-relaxed font-medium">
                  {t.text}
                </p>
              </div>

              {/* User info */}
              <div className="mt-8 flex items-center gap-4 relative z-10">
                {/* avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  {t.name[0]}
                </div>

                <div>
                  <div className="font-bold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}