/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['MADE Tommy Soft', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'heading': '800', // ExtraBold
        'body': '500',    // Medium
      },
      colors: {
        'pharm-blue': '#09447E',
        'pharm-light-blue': '#9DCBE9',
        'pharm-purple': '#495DA9',
        'pharm-grey': '#495057',
      },
    },
  },
  plugins: [],
}
