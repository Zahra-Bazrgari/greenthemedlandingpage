/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html", "**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "costume-primary": "#4CAF4F",
        "costume-natural-silver": "#F5F7FA",
        "costume-d-gray": "#4D4D4D",
        "costume-gray": "#717171",
        "costume-button-gray": "rgb(59, 70, 76)",
        "costume-input-box": "rgb(81, 91, 96)"
      },
      boxShadow: {
        custom: "0px 1.39px 2.78px 0px #ABBED133",
      },
    },
  },
  plugins: [],
};
