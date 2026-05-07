"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Lin",
    role: "CEO, Finly",
    text: "The level of polish and attention to detail is outstanding. Our product feels 10x better after the redesign.",
  },
  {
    name: "Marcus Reed",
    role: "Founder, Northwind",
    text: "She turned our messy ideas into a clean, modern, and user-friendly product. Highly recommended!",
  },
  {
    name: "Amélie Roux",
    role: "Head of Product",
    text: "Working together felt like having a senior designer in our team. Fast, creative, and reliable.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 8%",
        background: "#ffffff",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span
          style={{
            color: "#009999",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: 2,
          }}
        >
          TESTIMONIALS
        </span>

        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginTop: 10,
          }}
        >
          Kind words from{" "}
          <span style={{ color: "#009999" }}>clients</span>
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 25,
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              background: "#f8fffe",
              borderRadius: 20,
              padding: 30,
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              position: "relative",
              overflow: "hidden",
              minHeight: 220,
            }}
          >
            {/* 🔥 PREMIUM BLOB BACKGROUND */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                width: 150,
                height: 150,
                background: "#009999",
                opacity: 0.08,
                borderRadius:
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                top: 50,
                right: 10,
              }}
            />

            {/* soft glow layer */}
            <div
              style={{
                position: "absolute",
                width: 140,
                height: 140,
                background: "#009999",
                opacity: 0.05,
                borderRadius: "50%",
                bottom: -50,
                left: -50,
                filter: "blur(25px)",
              }}
            />

            {/* Quote */}
            <div
              style={{
                fontSize: 40,
                color: "#009999",
                opacity: 0.3,
                position: "relative",
                zIndex: 2,
              }}
            >
              “
            </div>

            {/* Text */}
            <p
              style={{
                marginTop: 10,
                fontSize: 14,
                lineHeight: 1.7,
                color: "#475569",
                position: "relative",
                zIndex: 2,
              }}
            >
              {t.text}
            </p>

            {/* User info */}
            <div
              style={{
                marginTop: 25,
                display: "flex",
                alignItems: "center",
                gap: 12,
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* avatar */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "#009999",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {t.name[0]}
              </div>

              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: "#64748b" }}>
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}