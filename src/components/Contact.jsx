"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    <section
      id="contact"
      style={{
        padding: "100px 8%",
        background: "#f7fffe",
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
          CONTACT
        </span>

        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginTop: 10,
          }}
        >
          Let’s build something{" "}
          <span style={{ color: "#009999" }}>amazing</span>
        </h2>

        <p style={{ color: "#64748b", marginTop: 10 }}>
          Have a project idea? Send me a message and I’ll reply soon.
        </p>
      </div>

      {/* Container */}
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "white",
          padding: 40,
          borderRadius: 20,
          boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            style={inputStyle}
          />

          {/* Email */}
          <input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            style={inputStyle}
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            style={{ ...inputStyle, resize: "none" }}
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: "100%",
              marginTop: 20,
              padding: "14px",
              background: "#009999",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            Send Message 🚀
          </motion.button>
        </form>
        
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: 12,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  outline: "none",
  fontSize: 14,
};