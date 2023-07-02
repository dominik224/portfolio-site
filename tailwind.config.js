/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '400px',
        'xm' : '560px',
      },
      colors: {
        dpurple: "#9580FF",
        dgreen: "#8AFF80",
        dpink: "#FF80BF",
        dyellow: "#FFFF80",
        dorange: "#FF9580",
        dblue: "#80FFEA",
        bg: '#0d0e11'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
