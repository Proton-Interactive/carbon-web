/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        carbon: {
          50: "#f6f7f9",
          100: "#edeff2",
          200: "#d5d9e2",
          300: "#b1b8c8",
          400: "#8691a9",
          500: "#64708b",
          600: "#4d576e",
          700: "#3f4759",
          800: "#363c4a",
          900: "#2f333e",
          950: "#1a1d23",
        },
      },
    },
  },
  plugins: [],
}
