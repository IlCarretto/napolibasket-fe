/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',     
        sm: '576px',  
        md: '768px',   
        lg: '992px',  
        xl: '1200px',  
        xxl: '1400px',
      },
    }, 
  },
  plugins: [],
}