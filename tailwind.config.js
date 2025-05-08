/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000033',    /* Dark navy blue */
        secondary: '#0066CC',  /* Medium blue */
        accent: '#0099FF',     /* Light blue */
        light: '#EDEDED',      /* Light gray */
        darkBlue: '#000033',   /* Same as primary for backward compatibility */
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}