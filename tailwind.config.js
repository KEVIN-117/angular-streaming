/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #6580f9 5%, #6c52ee 80%, #9e60ff 100%)',
      },
    },
  },
  plugins: [],
}

