/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        lpurple: "#9580FF",
        dgreen: "#8AFF80",
        lgreen: "#50DC5A",
        dpink: "#FF80BF",
        lpink: "#E178BE",
        dyellow: "#FFFF80",
        lyellow: "#ffa500",
        dorange: "#FF9580",
        lorange: "#E67864",
        dblue: "#80FFEA",
        lblue: "#5acddc",
        dark: '#0d0e11',
        light: '#f0eff0',
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
