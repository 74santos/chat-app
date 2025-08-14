// tailwind.config.js
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lume: {
          light: "#FFD166", // warm glow
          primary: "#6C63FF", // main violet
          accent: "#00BFA6", // teal pop
          dark: "#0D1B2A", // background dark
        }
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lume: {
          "primary": "#6C63FF",
          "secondary": "#FFD166",
          "accent": "#00BFA6",
          "neutral": "#0D1B2A",
          "base-100": "#FFFFFF",

        },
      },
     "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
     
    ],
    
  }
}






