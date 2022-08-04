const markdoc = require("@urbit/markdoc");

module.exports = {
  content: {
    files: [
      "./node_modules/@urbit/foundation-design-system/dist/**/*.js",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,svg,jsx,tsx}",
      "./content/**/*.md",
    ],
    transform: {
      md: (content) => {
        const parsed = markdoc.parse(content);
        const transform = markdoc.transform(parsed);
        return markdoc.renderers.html(transform);
      },
    },
  },
  presets: [require("@urbit/foundation-design-system/tailwind.config")],
};
