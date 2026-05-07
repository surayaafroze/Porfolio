// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         padding: "0 8%",
//         position: "relative",
//         overflow: "hidden",
//         background: "radial-gradient(circle at top, #e6fffb, white)",
//       }}
//     >
//       {/* background glow */}
//       <div
//         style={{
//           position: "absolute",
//           width: 400,
//           height: 400,
//           background: "#009999",
//           filter: "blur(140px)",
//           opacity: 0.2,
//           top: -100,
//           right: -100,
//         }}
//       />

//       <div style={{ maxWidth: 800, zIndex: 2 }}>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             color: "#009999",
//             fontWeight: 600,
//             letterSpacing: "2px",
//           }}
//         >
//           HELLO THERE
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           style={{
//             fontSize: "clamp(40px, 6vw, 80px)",
//             fontWeight: 700,
//             lineHeight: 1.1,
//           }}
//         >
//           I&apos;m <span style={{ color: "#009999" }}>Suraya</span>,  
//           <br /> Frontend Developer
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           style={{
//             marginTop: 20,
//             color: "#64748b",
//             maxWidth: 500,
//             lineHeight: 1.6,
//           }}
//         >
//           I build modern, animated, and user-friendly web experiences that feel premium and interactive.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           style={{ marginTop: 30, display: "flex", gap: 15 }}
//         >
//           <button
//             style={{
//               background: "#009999",
//               color: "white",
//               padding: "12px 24px",
//               borderRadius: 999,
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             View Portfolio
//           </button>

//           <button
//             style={{
//               border: "1px solid #009999",
//               color: "#009999",
//               padding: "12px 24px",
//               borderRadius: 999,
//               background: "transparent",
//               cursor: "pointer",
//             }}
//           >
//             Hire Me
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 8%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #f7fffe, #ffffff)",
        flexWrap: "wrap",
      }}
    >
      {/* background glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "#009999",
          filter: "blur(160px)",
          opacity: 0.18,
          top: -120,
          right: -120,
          borderRadius: "50%",
        }}
      />

      {/* LEFT SIDE */}
      <div style={{ maxWidth: 650, zIndex: 2 }}>
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "rgba(0,153,153,0.1)",
            color: "#009999",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          ✦ FRONTEND DEVELOPER
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: "clamp(42px, 6vw, 78px)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 20,
          }}
        >
          Hi, I&apos;m <span style={{ color: "#009999" }}>Suraya</span>
          <br />
          Frontend Web Developer
        </motion.h1>

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 20,
            color: "#64748b",
            maxWidth: 520,
            lineHeight: 1.7,
            fontSize: 16,
          }}
        >
          I build modern, responsive and high-performance web applications with
          clean UI, smooth animations and user-focused design.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            display: "flex",
            gap: 15,
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              background: "#009999",
              color: "white",
              padding: "12px 24px",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            View Projects →
          </a>

          <a
            href="#contact"
            style={{
              border: "1px solid #009999",
              color: "#009999",
              padding: "12px 24px",
              borderRadius: 999,
              fontSize: 14,
            }}
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: 40,
        }}
      >
        {/* glow behind image */}
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            background: "#009999",
            filter: "blur(120px)",
            opacity: 0.25,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <motion.img
          src="https://i.postimg.cc/KzBXqNnc/Untitled-design-(2)-2.jpg"
          alt="Suraya"
          style={{
            width: 320,
            height: 320,
            objectFit: "cover",
            borderRadius: "50%",
            position: "relative",
            zIndex: 2,
            border: "6px solid white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </motion.div>

      {/* floating decoration */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 80,
          width: 80,
          height: 80,
          background: "#009999",
          opacity: 0.2,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />


      
    </section>
  );
}