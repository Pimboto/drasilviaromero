import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "scroll-indicator": {
          "0%": { transform: "translateY(-0.25rem)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(1.5rem)", opacity: "0" },
        },
      },
      animation: {
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
