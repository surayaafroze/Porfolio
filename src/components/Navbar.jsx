"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 20,
        left: "12%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: 1100,
        zIndex: 100,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: 18 }}>
          Suraya<span style={{ color: "#009999" }}>.</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 20 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.label.toLowerCase())}
              style={{
                fontSize: 14,
                color:
                  active === l.label.toLowerCase() ? "#009999" : "#334155",
                position: "relative",
                transition: "0.3s",
              }}
            >
              {l.label}

              {/* active underline animation */}
              {active === l.label.toLowerCase() && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "#009999",
                    borderRadius: 10,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            background: "#009999",
            color: "white",
            padding: "10px 18px",
            borderRadius: 999,
            fontSize: 14,
          }}
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}