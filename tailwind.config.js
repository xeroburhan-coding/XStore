/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softbg: "#F6F6F6",
      },
      backgroundImage: {
        'fe1': "url('/assets/fe1.png')",
        'fe2': "url('/assets/fe2.png')",
        'fe3': "url('/assets/fe3.png')",
      }
    },
  },
  plugins: [],
};
