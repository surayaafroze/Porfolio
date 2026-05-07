"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Finly — Banking App",
    tag: "Mobile App",
    year: "2025",
  },
  {
    title: "Northwind Analytics",
    tag: "SaaS Dashboard",
    year: "2024",
  },
  {
    title: "Maison Botanique",
    tag: "E-commerce",
    year: "2024",
  },
  {
    title: "Aero Studio Identity",
    tag: "Branding",
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 8%",
        background: "white",
      }}
    >
      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2 style={{ fontSize: 40, fontWeight: 700 }}>
          Selected <span style={{ color: "#009999" }}>Projects</span>
        </h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>
          A few things I’ve designed and built
        </p>
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 25,
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{
              position: "relative",
              borderRadius: 22,
              padding: 25,
              border: "1px solid rgba(0,0,0,0.05)",
              background: "linear-gradient(145deg, #ffffff, #f9fafa)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              cursor: "pointer",
              overflow: "hidden",
              minHeight: 180,
            }}
          >
            {/* 🔥 PREMIUM FLOATING BLOB */}
            <motion.div
              animate={{ y: [0, 18, 0], scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                width: 260,
                height: 260,
                background: "#009999",
                filter: "blur(130px)",
                opacity: 0.15,
                top: -90,
                right: -90,
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {/* secondary glow */}
            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                background: "#009999",
                filter: "blur(100px)",
                opacity: 0.08,
                bottom: -70,
                left: -70,
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {/* content wrapper */}
            <div style={{ position: "relative", zIndex: 2 }}>
              {/* tag + year */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "#64748b",
                }}
              >
                <span
                  style={{
                    background: "rgba(0,153,153,0.1)",
                    color: "#009999",
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontWeight: 500,
                  }}
                >
                  {p.tag}
                </span>
                <span>{p.year}</span>
              </div>

              {/* title */}
              <h3
                style={{
                  marginTop: 60,
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>

              {/* CTA */}
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#64748b",
                  fontSize: 14,
                }}
              >
                <span>View Case Study</span>
                <span style={{ color: "#009999", fontWeight: 600 }}>
                  →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}