"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "Khulna University",
    degree: "BSS Honors in Sociology",
    year: "2022–Present",
    grade: "CGPA: 3.40/4.00",
  },
  {
    institution: "Uttara High School and College",
    location: "Uttara, Dhaka",
    degree: "Higher Secondary Certificate (Commerce)",
    year: "2019–2021",
    grade: "GPA: 5.00/5.00",
  },
  {
    institution: "Nawab Habibullah Model School and College",
    location: "Uttara, Dhaka",
    degree: "Secondary School Certificate",
    year: "2017–2019",
    grade: "GPA: 4.33/5.00",
  },
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 md:py-32 bg-slate-50/50 dark:bg-[#0f0f0f] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Education
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            My Academic <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-primary origin-top shadow-[0_0_10px_#009999]"
            />
          </div>

          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-white dark:bg-[#111] border-4 border-primary rounded-full flex items-center justify-center -translate-x-1/2 shadow-[0_0_15px_rgba(0,153,153,0.3)] z-10"
                  >
                    <GraduationCap size={16} className="text-primary" />
                  </motion.div>

                  {/* Empty half for spacing on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}
                  >
                    <div className="bento-card relative overflow-hidden group">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
                      
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {edu.year}
                      </div>
                      
                      <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {edu.institution}
                      </h4>
                      
                      {edu.location && (
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                          {edu.location}
                        </p>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="font-bold text-primary">{edu.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
