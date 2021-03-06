module.exports = {
  purge: ["./pages/*.js", "./components/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '200': "200%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
