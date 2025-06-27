// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // bu juda muhim!
  theme: {
    extend: {
      colors: {
        darkBg: '#0f172a',        // fon uchun
        darkSecondary: '#1e293b', // card/modal uchun
        primary: '#3b82f6',       // ko‘k rang
      },
    },
  },
  plugins: [],
}
