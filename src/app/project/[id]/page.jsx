"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Calendar, Tag, Globe } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const projectIndex = projects.findIndex(p => p.id === id);
  const isFound = projectIndex !== -1;
  const project = isFound ? projects[projectIndex] : projects[0];
  const nextProject = projects[((isFound ? projectIndex : 0) + 1) % projects.length];

  useEffect(() => {
    if (id && !isFound) {
      router.push("/#projects");
    }
  }, [id, isFound, router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) {
    return (
      <main className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500">Loading project details...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  Project Detail
                </span>
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
              </div>

              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                {project.title}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-bold">
                    <Calendar size={14} /> Year
                  </div>
                  <p className="text-slate-900 dark:text-white font-medium">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-bold">
                    <Tag size={14} /> Category
                  </div>
                  <p className="text-slate-900 dark:text-white font-medium">{project.tags[0]}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-bold">
                    <Globe size={14} /> Platform
                  </div>
                  <p className="text-slate-900 dark:text-white font-medium">Web App</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                >
                  Launch Live Demo
                  <ExternalLink size={18} />
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-800"
                >
                  <FiGithub size={20} />
                  View Code
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={85}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Project <span className="text-gradient">Overview</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-6">
                  {project.detailedDescription}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  This project was built to solve real-world problems using modern web technologies. Every line of code was written with performance, scalability, and user experience in mind. The design follows a minimalist philosophy, ensuring that the content remains the primary focus.
                </p>
              </div>

              {project.challenges && (
                <div>
                  <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Challenges <span className="text-gradient">Faced</span>
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-light">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.futurePlans && (
                <div>
                  <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Future <span className="text-gradient">Plans</span>
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-light">
                    {project.futurePlans}
                  </p>
                </div>
              )}
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#111111] p-10 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
                <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white mb-8">Key Features</h3>
                <ul className="space-y-4">
                  {project.features.map((f, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={f} 
                      className="flex items-center gap-4 text-slate-700 dark:text-slate-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                      <span className="font-medium">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-700" />
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center relative z-10">
          <span className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4 block">Up Next</span>
          <Link href={`/project/${nextProject.id}`} className="inline-block group">
            <h2 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 hover:text-primary transition-colors duration-500">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center gap-4 text-primary font-bold text-xl">
              View Project <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
