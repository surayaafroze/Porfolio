"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "60px 8% 30px",
        background: "#0b2f2f",
        color: "white",
      }}
    >
      {/* Top */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 30,
          marginBottom: 40,
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>
            Suraya<span style={{ color: "#00d4d4" }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 10,
              maxWidth: 300,
              fontSize: 14,
              color: "#cbd5e1",
              lineHeight: 1.6,
            }}
          >
            Frontend Developer focused on building modern, responsive and
            high-performance web experiences with clean UI and strong UX.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: 12 }}>Quick Links</h4>
          {["Home", "Services", "Projects", "About", "Contact"].map(
            (item) => (
              <div key={item} style={{ marginBottom: 8 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#cbd5e1",
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              </div>
            )
          )}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: 12 }}>Contact</h4>
          <p style={{ fontSize: 14, color: "#cbd5e1" }}>
            📧 surayaafroze63@gmail.com
          </p>
          <p style={{ fontSize: 14, color: "#cbd5e1" }}>
            📍 Khulna, Bangladesh
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.1)",
          marginBottom: 20,
        }}
      />

      {/* Bottom */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: 13,
          color: "#94a3b8",
        }}
      >
        <p>© {new Date().getFullYear()} Suraya. All rights reserved.</p>

        <div style={{ display: "flex", gap: 15 }}>
          <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
            GitHub
          </a>
          <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
            LinkedIn
          </a>
          <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}