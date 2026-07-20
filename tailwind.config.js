/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "Inter", "sans-serif"],
      grotesk: ["var(--font-grotesk)", "Space Grotesk", "sans-serif"],
      mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      alexandria: ["Alexandria", "sans-serif"],
      lorin: ["Lorin", "serif"],
    },
    extend: {
      colors: {
        // Helivan brand — the Steel system (brand spec v1.0)
        midnight: "#0A1638",
        steel: "#33507A",
        "steel-deep": "#263C5C",
        "steel-tint": "#C9D6E8",
        mist: "#F4F7FC",
        hairline: "#DFE6F2",
        "brand-muted": "#5C6B8A",
        "drift-amber": "#F59E0B",
        "pass-green": "#10B981",
        "euclid-blue": "#006895",
        "euclid-red": "#f62516",
        "euclid-yellow": "#ffba00",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
