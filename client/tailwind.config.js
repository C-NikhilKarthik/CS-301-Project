/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bg2: "url('/src/assets/dark-image.jpg')",
        bg3: "url('/src/assets/light.jpg')",
        bg1: "url('https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg')",
        login:
          "url('https://static.vecteezy.com/system/resources/previews/008/969/361/non_2x/multi-layers-gray-blue-dark-texture-3d-papercut-layers-in-gradient-banner-abstract-paper-cut-art-background-design-for-website-template-topography-map-concept-or-smooth-origami-paper-cut-vector.jpg')",
        // 'login1': "url('/images/login_cleanup.jpg')",
        login2:
          "url('https://static.vecteezy.com/system/resources/previews/016/259/154/non_2x/dark-abstract-modern-background-with-glow-blue-and-pink-color-wavy-line-shape-futuristic-and-deluxe-shiny-wavy-line-concept-background-illustrations-eps1-vector.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
