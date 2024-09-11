// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  experimental: { inlineRouteRules: true },
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime',
    '@nuxt/ui',
  ],

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  googleFonts: {
    families: {
      'Space Mono': true,
      'Unica One': true,
      'Fascinate': true,
      'Montserrat': true,
      'DM Mono': true,
      'Poppins': true,
      'Lato': true,
      'Fira Mono': true,
      'Source Code Pro': true,
    },
  },

})
