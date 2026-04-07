import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF6B35",
        "dark-bg": "#121212",
        "light-bg": "#FFFFFF",
        "dark-text": "#E8E8E8",
        "light-text": "#333333",
        "gray-light": "#F5F5F5",
        "gray-medium": "#CCCCCC",
      },
      backgroundColor: {
        "primary-orange": "#FF6B35",
      },
      textColor: {
        "primary-orange": "#FF6B35",
      },
      borderColor: {
        "primary-orange": "#FF6B35",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-in",
        "slide-up": "slideUp 300ms ease-out",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
