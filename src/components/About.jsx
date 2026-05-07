"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "60+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "12", label: "Design Awards" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 8%",
        background: "#f7fffe",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              color: "#009999",
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: 13,
            }}
          >
            ABOUT ME
          </span>

          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              marginTop: 10,
              lineHeight: 1.2,
            }}
          >
            Designing with <span style={{ color: "#009999" }}>purpose</span>,
            building with care.
          </h2>

          <p
            style={{
              marginTop: 20,
              color: "#64748b",
              lineHeight: 1.7,
              fontSize: 15,
              maxWidth: 500,
            }}
          >
            I am a frontend developer passionate about creating modern,
            responsive, and user-focused digital experiences. I combine design
            thinking with clean code to build interfaces that feel smooth,
            intuitive, and premium.
          </p>

          <p
            style={{
              marginTop: 15,
              color: "#64748b",
              lineHeight: 1.7,
              fontSize: 15,
              maxWidth: 500,
            }}
          >
            My goal is not just to build websites, but to create meaningful
            digital experiences that solve real problems and look visually
            exceptional.
          </p>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: "white",
                borderRadius: 18,
                padding: 25,
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#009999",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "#64748b",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}