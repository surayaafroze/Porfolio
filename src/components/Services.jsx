"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "✦", title: "Frontend Web Development", desc: "Building modern and responsive websites using React and Next.js with clean code." },
  { icon: "◐", title: "Responsive Web Design", desc: "Creating mobile-friendly and user-centered design systems that work on all devices." },
  { icon: "▣", title: "API Integration", desc: "Connecting frontend applications with robust backend services seamlessly." },
  { icon: "◇", title: "UI-focused Development", desc: "Crafting clean, interactive, and modern UI experiences with premium animations." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4"
          >
            SERVICES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900"
          >
            What I <span className="text-gradient">Do Best</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-4 text-lg"
          >
            Delivering high-quality digital solutions tailored to your needs.
          </motion.p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group bg-slate-50/50 p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:bg-white shadow-sm hover:shadow-[0_20px_40px_rgb(0,153,153,0.06)] transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* glow effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

              {/* icon */}
              <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300 origin-bottom-left">
                {s.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>

              {/* description */}
              <p className="text-slate-500 leading-relaxed font-medium">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}