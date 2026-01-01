/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12063b", // Midnight Start
        secondary: "#09555c", // Midnight End
        "midnight-start": "#12063b",
        "midnight-end": "#09555c",
        text: "#FFFFFF", // White
        "text-main": "#FFFFFF", // White
        "text-accent": "#2DD4BF", // Teal-400
        "text-muted": "#94a3b8", // Slate-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
