/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'header-bg': "url('./media/header-bg.jpg')",
      //   'footer-bg': "url('./media/footer-bg.jpg')",
      // }
    },
  },
  plugins: [require("daisyui")],
}

