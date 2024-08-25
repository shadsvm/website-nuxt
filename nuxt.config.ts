// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // nitro: {
  //   prerender: {
  //     routes: ["/resume"],
  //     ignore: ["/dynamic"],
  //   },
  // },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-lucide-icons",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Libre Barcode 39 Text": true,
          "Libre Barcode 128 Text": true,
          "David Libre": true,
          "Space Mono": true,
          "Unica One": true,

          Fascinate: true,
        },
      },
    ],
  ],
  tailwindcss: {
    editorSupport: true,
  },
});
