/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'bounce-side-l': 'bounceSideLeft 1s infinite',
        'bounce-side-r':'bounceSideRight 1s infinite'
      },
      keyframes: {
        bounceSideLeft: {
          '0%, 100%': {
            'transform': 'translateX(0%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        bounceSideRight: {
          '0%, 100%': {
            'transform': 'translateX(0%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateX(25%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    },
  },
  plugins: [],
};
0