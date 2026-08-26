/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          offwhite: "#F9F9F9",
          charcoal: "#2A2A2A",
          navy: "#1A2E44",
          gold: "#C5A880",
        }
      }
    },
  },
  plugins: [],
}
