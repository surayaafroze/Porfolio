"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50/50 dark:from-[#111] to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Contact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Let’s build something <span className="text-gradient">amazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-800 dark:text-slate-200 mt-4 text-lg"
          >
            Have a project idea? Send me a message and I’ll reply soon.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-outfit text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-slate-800 dark:text-slate-200 mb-10 leading-relaxed text-lg font-light">
              I am currently available for freelance work and open to new opportunities. Let&apos;s connect and discuss how I can help you build your next project.
            </p>

            <div className="space-y-6">
              <a href="mailto:surayaafroze63@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800">
                  <FiMail size={24} className="transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">surayaafroze63@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800">
                  <FiMapPin size={24} className="transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Khulna, Bangladesh</div>
                </div>
              </div>

              <a href="tel:+8801777980628" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800">
                  <FiPhone size={24} className="transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">+880 1777-980628</div>
                </div>
              </a>

              <a href="https://github.com/surayaafroze" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800">
                  <FiGithub size={24} className="transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">GitHub</div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">github.com/surayaafroze</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/suraya-afroze/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800">
                  <FiLinkedin size={24} className="transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">LinkedIn</div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">linkedin.com/in/suraya-afroze</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 relative"
          >
            {/* Form decorative element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-bl-full pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#151515] focus:bg-white dark:focus:bg-[#111] focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 dark:text-white"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-5 top-4 text-slate-700 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-valid:top-1.5 peer-valid:text-xs"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#151515] focus:bg-white dark:focus:bg-[#111] focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-800 dark:text-white"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-5 top-4 text-slate-700 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-valid:top-1.5 peer-valid:text-xs"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#151515] focus:bg-white dark:focus:bg-[#111] focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-slate-900 dark:text-white resize-none"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-5 top-4 text-slate-700 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-valid:top-1.5 peer-valid:text-xs"
                >
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(0,153,153,0.3)] hover:bg-primary-dark transition-colors duration-300 text-lg flex justify-center items-center gap-2"
              >
                Send Message <span>🚀</span>
              </motion.button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}