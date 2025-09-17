/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "rgb(227 230 230)",
        primaryDark: "rgb(16, 22, 28)",
        secundaryDark: "rgb(27, 33, 43)",
        skeleton: "rgb(202, 202, 202)",
        skeletonDark: "rgb(38, 47, 62)",
      }
    },
  },
  plugins: [],
}

