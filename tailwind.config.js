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
        logo: ['Vibur', 'sans'],
        typewriter:['MODERN TYPEWRITER',' sans-serif']
      },
      animation: {
        'blink-2': 'blink 2s linear infinite',
        'blink-3': 'blink 3s linear infinite',
      },
      boxShadow: {
        'custom': '0 0 5px cyan, 0 0 10px cyan',
        'custom-hover': '0 0 50px cyan, 0 0 100px cyan',
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#A3C7D6",
            "secondary": "#3F3B6C",
            "accent": "cyan",
            "neutral": "#2a323c",
            "base-100": "#3F3B6C",
          },
          dark: { // Corrected to 'dark' instead of 'darktheme'
            "base-100": "#f5f3f2",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
