/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "angio-red": "#de3745",
        "angio-red-primary": "#ad313c",
        "angio-red-dark": "#7b242c",
        "angio-blue-dark": "#184e83",
        "angio-blue-light": "#3b7bc2",
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
        95: "0.95",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
