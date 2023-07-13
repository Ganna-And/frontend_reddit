/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      'xxs':'0.5rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
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

