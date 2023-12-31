/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
         default: "0px"
        }
      },
      colors: {
        "dark-bg": "#0F1216",
        "light-bg": "#EEF0F4",
        "grey-0": "#161B21",
        "grey-100": "#EEF0F4",
        "grey-200": "#DDE1E8",
        "grey-300": "#CCD1D9",
        "grey-600": "#7D8FA9",
        "grey-800": "#3B4758",
        "grey-900": "#1D232C",
        "primary": "#0077E4",
        "primary-600": "#319DFF",
        "success": "#0DA678",
        "success-100": "#10d096",
        "warning": "#FFAA04",
        "warning-100": "#ffc045",
        "warning-200": "#FFE6B5",
        "danger": "#FF316A",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}