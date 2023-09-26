/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.20)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "success": "#00BE74",
        "error": "#8B141A",
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      borderRadius: {
        "signup-radius": "65px"
      },
      boxShadow: {
        "signup-box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
      },
      backdropBlur: {
        "23": "blur(23.668209075927734px)"
      },
      width: {
        "1.5": "6px",
        "2.5": "10px",
        "97.5": "390px",
        "88": "334px",
        "26": "100px",
        "155.5": "155.5px",
        "136": "136.129px",
        "145": "145.238px",
        "366": "366.817",
      },
      lineHeight: {
        "normal": "normal"
      }
    },
  },
  plugins: [],
}