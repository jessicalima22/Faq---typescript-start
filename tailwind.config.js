/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notojp: ['var(--font-noto_jp)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        backgroundColor: '#e6f2ff',
        primary: '#fcf7f3',
        secondary: '#ffffff',
        backgroundColorHover:'#f94d46'
      },
      width: {
        '100': '28rem',
        'textbox': '31rem'
      },
      minHeight: {
        '25%': '25%'
      },
      minWidth: {
        '98': '24rem'
      }
    },
  },
  plugins: [],
}
