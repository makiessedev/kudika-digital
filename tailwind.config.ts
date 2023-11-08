import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red: {
        300: '#D95959',
        500: '#BF0F0F',
        600: '#A60A0A'
      },

      gray: {
        100: '#D9D9D9',
        500: '#1E1E1E'
      },

      black: '#0D0D0D',
      white: '#FFFFFF'
    },
    fontFamily: {
      montserrat: ['Montserrat']
    },

    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
