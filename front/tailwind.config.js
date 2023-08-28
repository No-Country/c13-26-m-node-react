/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "container": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      maxWidth: {
        'full-container': '1300px'
      }
    },
  },
  plugins: [],
}