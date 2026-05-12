"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Keen Keeper",
    description: "A comprehensive task management and productivity application designed to help users organize their daily workflows efficiently.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    year: "2024",
    liveUrl: "https://keen-keeper-project-kappa.vercel.app/",
    githubUrl: "https://github.com/surayaafroze",
  },
  {
    title: "Online Qurbani Hat",
    description: "A digital marketplace connecting livestock sellers with buyers for Qurbani, featuring secure transactions and vendor management.",
    tags: ["Next.js", "Tailwind CSS", "API"],
    year: "2024",
    liveUrl: "https://online-qurbani-hat.vercel.app/",
    githubUrl: "https://github.com/surayaafroze",
  },
  {
    title: "Dragon News",
    description: "A dynamic news portal with category-based routing, user authentication, and real-time updates.",
    tags: ["React", "Firebase", "React Router"],
    year: "2023",
    liveUrl: "https://dragon-news-project-five.vercel.app/category/01",
    githubUrl: "https://github.com/surayaafroze",
  },
  {
    title: "DigiTools Platform",
    description: "A comprehensive platform offering various digital tools and utilities for modern workflows with a sleek React-based UI.",
    tags: ["React", "CSS3", "Frontend"],
    year: "2023",
    liveUrl: "https://digitools-platform-react.netlify.app/",
    githubUrl: "https://github.com/surayaafroze",
  },
  {
    title: "Job Application Tracker",
    description: "A specialized dashboard application to help job seekers track their applications, interviews, and offers in one place.",
    tags: ["JavaScript", "HTML5", "CSS"],
    year: "2023",
    liveUrl: "https://job-application-tracker-javascript.netlify.app/",
    githubUrl: "https://github.com/surayaafroze",
  },
];

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
              className="bento-card group flex flex-col justify-between min-h-[380px]"
            >
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 font-outfit text-sm font-bold">{p.year}</span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-light text-lg mb-8">
                  {p.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <a 
                  href={p.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a 
                  href={p.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <FiGithub size={18} />
                  Source Code
                </a>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
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