/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primaryColor:"#0077FF",
      yelloColor:"#FEB60D",
      purpleColor:"#9771FF",
      irisBlueColor:"#01B5CS",
      darkBlueColor:"#000000",
      lightBlueColor:"#F2F2F2",
      whiteColor:"#FFFFFF",
      blackColor:"#000000",
      grayColor:"#808080",
      headingColor:"#181A1E",
      bodyColor:"#181A1E",
      linkColor:"#0077FF",
      linkHoverColor:"#0077FF",
      linkActiveColor:"#0077FF",
      linkVisitedColor:"#0077FF",
      textColor:"#4E545F"
    },
    boxShadow:{
      panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;"}
    
  },
  plugins: [],
};

