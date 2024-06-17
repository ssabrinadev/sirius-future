/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: {
          purple: {
            DEFAULT: '#7362BC',
            100: '#EEEEFF',
            200: '#DECFFF',
            300: '#8D7FC7',
            400: '#7362BC',
            500: '#434B74',
            600: '#323854',
          },
        },
        secondary: {
          orange: {
            DEFAULT: '#EA580C',
            100: '#FDBA74',
            200: '#FFF1CB',
            300: '#EA580C',
          },
          white: {
            DEFAULT: '#FFF',
          },
          beryuzovy: {
            DEFAULT: '#D8ECFF',
          },
          green: {
            DEFAULT: '#D7F0D6',
            100: '#D7F0D6',
          },
          blue: {
            DEFAULT: '#008AFF',
          },
        },
        borders: {
          green: {
            DEFAULT: '#BBE7B9',
          },
          purple: {
            DEFAULT: '#7362BC',
            100: '#9382d5',
          },
          red: {
            DEFAULT: '#E12828',
          },
          grey: {
            DEFAULT: '#ECECEC',
          },
          blue: {
            DEFAULT: '#323854',
          },
        },
        third: {
          blue: {
            DEFAULT: '#323854',
            100: '#434B74',
          },
          grey: {
            DEFAULT: '#79747F',
            100: '#C8C5CD',
          },
          purple: {
            DEFAULT: '#7362BC',
          },
        },
        light: {
          DEFAULT: '#FFFBF2',
          100: '#C0BBB3',
          200: '#E0DBD2',
        },
        'light-blue': {
          DEFAULT: '#C4E5FC',
        },
        dark: {
          DEFAULT: '#262522',
        },
      },
      animation: {
        'spin': 'spin 0.3s linear infinite',
        'spin-slow': 'spin 1s linear infinite',
        wiggle: 'wiggle 0.3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};
