/** @type {importroboto2('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        rregular: ["RobotoSlab-Regular", "sans-serif"], 
        rmedium: ["RobotoSlab-SemiBold", "sans-serif"], 
        rblack: ["RobotoSlab-Black", "sans-serif"], 
        pregular: ["Poppins-Regular", "sans-serif"], 
        pbold: ["Poppins-Bold", "sans-serif"], 
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      }
    },
  },
  plugins: [],
}

