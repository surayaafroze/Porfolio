"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma 
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFramer } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const technologies = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "JavaScript", icon: <IoLogoJavascript color="#F7DF1E" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
];

export default function TechMarquee() {
  return (
    <section className="py-12 bg-white dark:bg-[#0a0a0a] border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
      {/* Blur gradients for edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10" />

      <div className="flex w-full overflow-hidden no-scrollbar">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="flex items-center gap-12 px-6 w-max"
        >
          {/* Double the array to ensure smooth infinite loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-xl font-bold font-outfit text-slate-800 dark:text-slate-200">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
