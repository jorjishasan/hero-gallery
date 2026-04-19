/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Instrument Serif'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        muted: "#6F6F6F",
      },
      animation: {
        "fade-rise": "fade-rise 0.8s ease-out forwards",
        "fade-rise-delay": "fade-rise 0.8s ease-out 0.2s forwards",
        "fade-rise-delay-2": "fade-rise 0.8s ease-out 0.4s forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "count-up": "count-up 0.8s ease-out forwards",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
