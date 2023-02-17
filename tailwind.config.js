/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        dark: {
          primary: "#ec42f5",
          secondary: "#c7d2fe",
          neutral: "#ffffff",
          "base-100": "#1F2937",

          // secondary: "#701a75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
