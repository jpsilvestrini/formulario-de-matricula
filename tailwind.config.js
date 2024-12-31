import twa from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          100: '#FF6760',
          200: '#FF544C', 
          300: '#FF4543'
        },
        text: {
          100: '#2F2F2F',
          200: '#4F4F4E',
          300: '#9F9F9F',
          400: '#FF4543'
        },
        surface: {
          100: '#FFFFFF',
          200: '#F9F9F9',
          300: '#F0F0F4'
        },
        stroke: {
          100: '#ECECEC',
          200: '#FF544C'
        },
        semantic: {
          100: '#FFC2B0'
        },
        supporting: {
          100: '#FFA2A0',
          200: '#FFE9AF',
          300: '#C7FFE0',
          400: '#B4C5EC',
          500: '#E3D8FF',
          600: '#FFE0E0'
        }
      },
    },
  },
  darkMode: "class",
  plugins: [twa],
}

export default config
