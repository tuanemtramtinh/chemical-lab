/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm' : '375px',
        'md' : '768px',
        'lg' : '992px',
        'xl' : '1440px',
        '2xl' : '1440px'
      },
      container: {
        center: true
      },
    },
  },
  plugins: [],
};
