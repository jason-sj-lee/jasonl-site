module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        mejuri: "url('/public/mejuri_logo.pngs')",
        hootsuite: "url('./public/hootsuite_logo.svg')",
        pk: "url('./public/pk.png')",
      },
    },
  },
  plugins: [],
};
