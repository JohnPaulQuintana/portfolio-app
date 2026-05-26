/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.05)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },

        floatSlowReverse: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-50px, 40px) scale(1.08)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },

      animation: {
        floatSlow: "floatSlow 18s ease-in-out infinite",
        floatSlowReverse: "floatSlowReverse 22s ease-in-out infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#007979",
          soft: "#24B1B1",
          dark: "#006666",
        },

        background: "#FFF0E4",
        surface: "#FFE0C5",

        text: {
          heading: "rgba(20, 20, 20, 0.92)",
          body: "rgba(20, 20, 20, 0.72)",
          muted: "rgba(20, 20, 20, 0.55)",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 0 60px rgba(36, 177, 177, 0.25)",
      },
    },
  },

  plugins: [],
};
