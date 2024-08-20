/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        smxl: "660px",
        md: "760px",
        mdsm: "930px",
        lgsm: "1024px",
        lg: "1270px",
      },
    },
  },
  plugins: [],
};
