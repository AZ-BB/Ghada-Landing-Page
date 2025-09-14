/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        gold: {
          DEFAULT: 'var(--gold)',
          light: 'var(--gold-light)',
          dark: 'var(--gold-dark)',
        },
        cream: 'var(--cream)',
        'dark-gray': 'var(--dark-gray)',
        'light-gray': 'var(--light-gray)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 10px 25px -3px rgba(203, 161, 53, 0.1), 0 4px 6px -2px rgba(203, 161, 53, 0.05)',
        'gold-lg': '0 20px 25px -5px rgba(203, 161, 53, 0.15), 0 10px 10px -5px rgba(203, 161, 53, 0.1)',
      },
    },
  },
  plugins: [],
}
