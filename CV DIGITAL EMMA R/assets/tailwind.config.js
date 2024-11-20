/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
      extend: {
        fontFamily: {
          'italiana': ['Italiana', 'sans-serif'], // For h1 and h2
          'istok': ['Istok Web', 'sans-serif'],   // For h3, h4, h5, h6, p
        },
      },
    },
    variants: {},
    plugins: [],
  }
