/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          500: 'oklch(31.47% 0.1034 21.93)',
          600: 'oklch(29.47% 0.1034 21.93)',
          700: 'oklch(27.47% 0.1034 21.93)',
          800: 'oklch(25.47% 0.1034 21.93)',
          900: 'oklch(23.47% 0.1034 21.93)',
        },
        tan: {
          500: 'oklch(89.82% 0.04 67.28)',
          600: 'oklch(84.82% 0.04 67.28)',
          700: 'oklch(79.82% 0.04 67.28)',
          800: 'oklch(74.82% 0.04 67.28)',
          900: 'oklch(69.82% 0.04 67.28)',
        },
        darkblue: {
          500: 'oklch(24.55% 0.0188 229.7)',
          600: 'oklch(22.55% 0.0188 229.7)',
          700: 'oklch(20.55% 0.0188 229.7)',
          800: 'oklch(18.55% 0.0188 229.7)',
          900: 'oklch(16.55% 0.0188 229.7)',
        },
        orange: {
          500: 'oklch(46.47% 0.1183 41.76)',
          600: 'oklch(43.47% 0.1183 41.76)',
          700: 'oklch(40.47% 0.1183 41.76)',
          800: 'oklch(37.47% 0.1183 41.76)',
          900: 'oklch(34.47% 0.1183 41.76)',
        },
        blue: {
          500: 'oklch(59.03% 0.0733 232.9)',
          600: 'oklch(54.03% 0.0733 232.9)',
          700: 'oklch(49.03% 0.0733 232.9)',
          800: 'oklch(44.03% 0.0733 232.9)',
          900: 'oklch(39.03% 0.0733 232.9)',
        },
        green: {
          500: 'oklch(65.96% 0.1425 124.05)',
          600: 'oklch(61.96% 0.1425 124.05)',
          700: 'oklch(57.96% 0.1425 124.05)',
          800: 'oklch(53.96% 0.1425 124.05)',
          900: 'oklch(50.96% 0.1425 124.05)',
        },
        background: 'oklch(98.56% 0.0084 56.32)',
      },
      fontFamily: {
        bookman: ['bookman', 'sans-serif'],
        brandon: ['brandon', 'sans-serif'],
        roc: ['roc', 'sans-serif'],
      },
      fontSize: {
        heading1: '32px',
        heading2: '28px',
        subheading1: '24px',
        subheading2: '22px',
        body1: '20px',
        body2: '18px',
      },
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [],
}
