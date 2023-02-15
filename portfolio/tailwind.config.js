/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      acumin: ["acumin-pro", "sans-serif"],
      sans: ["helvetica", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#7C3AED",
      black: "#0F172A",
      slate: "#64748B",
      green: "#059669",
      yellow: "#FACC15",
      orange: "#F97316",
      blue: "#2563EB",
      rose: "#E11D48",
    },

    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },

  plugins: [],
};
