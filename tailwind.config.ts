import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        "bg-alt": "#0f0f0f",
        "bg-card": "#131313",
        text: "#f5f5f5",
        muted: "#8a8a8a",
        accent: "#10b981",
        "accent-dim": "#0d8c63",
        "accent-glow": "rgba(16,185,129,0.15)",
        border: "#1e1e1e",
        "border-hover": "#2a2a2a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem,8vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        section: ["clamp(2rem,5vw,3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
