/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    colors: {
      'black': { 500: '#1B1A17',
                 200: '#242320',
                 100: '#23221F'},
      'orange': { 500: '#A35709',
                  200: '#FF8303' },
      'white': '#F0E3CA'
    }
  },
  plugins: [],
}

