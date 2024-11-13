// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        xs: "500px",
        "2xs": "400px",
        "max-500": { max: "500px" },
      },
    },
  },
  plugins: [],
};
