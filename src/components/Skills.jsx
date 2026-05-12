"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFramer } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Layers, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layers size={24} />,
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "JavaScript", icon: <IoLogoJavascript color="#F7DF1E" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-black dark:text-white" /> },
      { name: "GSAP", icon: <span className="font-bold text-[#88CE02] font-serif">G</span> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench size={24} />,
    skills: [
      { name: "Git", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bento-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,153,153,0.15)] transition-all cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
