/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     fontSize:{
   "xxs":'0.5rem',
      },
       extend: {
        fontFamily: {
          monoton: ['Monoton', 'sans-serif'],
          display: ['Display', 'sans-serif'],
        },
        daisyui: {
          themes: [
            {
              mytheme: {
     "primary": "#A3C7D6",     
     "secondary": "#3F3B6C",      
     "accent": "#a21caf",     
     "neutral": "#2a323c",      
     "base-100": "white",      
              },
              light:{
                "base-100": "#f5f3f2",
              }
            },
          ],
        },
      }
    },

  plugins: [require("daisyui")],
}

