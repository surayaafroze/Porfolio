"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "✦", title: "UI / UX Design", desc: "Clean and user-friendly interface design with modern aesthetics." },
  { icon: "◐", title: "Web Development", desc: "Responsive and fast websites built with modern technologies." },
  { icon: "▣", title: "Frontend Animation", desc: "Smooth Framer Motion based interactive UI experiences." },
  { icon: "◇", title: "Responsive Design", desc: "Pixel-perfect layouts for all screen sizes and devices." },
  { icon: "✺", title: "Design Systems", desc: "Scalable and reusable component-based UI systems." },
  { icon: "↗", title: "Performance UI", desc: "Optimized frontend for speed, SEO and best UX." },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 8%",
        background: "#f7fffe",
      }}
    >
      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2 style={{ fontSize: 40, fontWeight: 700 }}>
          What I <span style={{ color: "#009999" }}>Do Best</span>
        </h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>
          Services I provide to build modern digital experiences
        </p>
        
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            style={{
              background: "white",
              padding: 25,
              borderRadius: 20,
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* glow effect */}
            <div
              style={{
                position: "absolute",
                width: 120,
                height: 120,
                background: "#009999",
                filter: "blur(80px)",
                opacity: 0.1,
                top: -40,
                right: -40,
              }}
            />

            {/* icon */}
            <div
              style={{
                fontSize: 28,
                color: "#009999",
                marginBottom: 10,
              }}
            >
              {s.icon}
            </div>

            {/* title */}
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>{s.title}</h3>

            {/* description */}
            <p
              style={{
                marginTop: 10,
                color: "#64748b",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {s.desc}
            </p>
          </motion.div>
        ))}

        
      </div>
    </section>
  );
}