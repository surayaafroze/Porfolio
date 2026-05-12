"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Providers({ children }) {
  useEffect(() => {
    // Basic GSAP configuration for smoother scroll-linked animations
    ScrollTrigger.defaults({
      markers: false,
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
