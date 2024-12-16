// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Pastikan file HTML Anda terdaftar di sini
    "./src/**/*.{html,js}" // Jika menggunakan folder src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E23E57', // Merah
        background: '#311D3F', // Background Gelap
        hover: '#ffffff', // Hover Putih
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Font Poppins
      },
    },
  },
  plugins: [],
}