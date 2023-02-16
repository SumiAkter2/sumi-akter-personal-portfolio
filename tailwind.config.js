/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#d97706",
        },
        dark: { primary: "#701a75" },
        cupcake: { primary: "#d1d5db" },
        // coffee: { primary: "#06b6d4" },
        // synthwave: { primary: "#6b7280" },
      },
    ],
  },
  plugins: [require("daisyui")],
};
