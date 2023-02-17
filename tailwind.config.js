/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#f3f4f6",
          secondary: "#701a75",
        },
        dark: {
          primary: "#f3f4f6",
          secondary: "#701a75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
