"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50/50 dark:bg-[#0f0f0f] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white"
          >
            Selected <span className="text-gradient">Works</span>
          </motion.h2>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bento-card group flex flex-col min-h-[450px]"
            >
              {/* Image Preview */}
              <Link href={`/project/${p.id}`} className="relative h-56 mb-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 block">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-bold flex items-center gap-2">
                    Click to view details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>

              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 font-outfit text-sm font-bold">{p.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-light text-base mb-6 line-clamp-2">
                  {p.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link 
                  href={`/project/${p.id}`}
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors bg-slate-100 dark:bg-slate-800/50 px-5 py-2.5 rounded-full"
                >
                  View Details
                </Link>
                <a 
                  href={p.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2"
                >
                  <FiGithub size={18} />
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-20 text-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/surayaafroze"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all duration-300"
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </div>

      </div>
    </section>
  );
}

function ArrowRight({ size }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}