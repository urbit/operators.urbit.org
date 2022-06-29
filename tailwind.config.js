module.exports = {
  content: [
    "./node_modules/foundation-design-system/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  presets: [require("foundation-design-system/tailwind.config")],
};
