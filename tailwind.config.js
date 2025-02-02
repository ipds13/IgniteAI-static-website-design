/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Just Sans Semibold', 'sans-serif'],
        sans: ['Myriad Pro Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}
