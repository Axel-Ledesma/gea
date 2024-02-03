/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gothamlight: "GothamLight, system-ui",
      },
      backgroundImage: {
        "abrir-menu": "url('../svg/menu.svg')",
        "cerrar-menu": "url('../svg/x.svg')",
        "gea-desktop": "url('../desktop/gea_desktop.gif')",
      },
      colors: {
        amarillo: "#e8e33c",
        celeste: "#298f98",
      },
    },
  },
  plugins: [],
};
