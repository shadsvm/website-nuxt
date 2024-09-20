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
    '@nuxtjs/robots',
  ],
  content: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
  googleFonts: {
    families: {
      'Lato': true,
      'Poppins': true,
      'Space Mono': true,
      'Source Code Pro': true,
      'DM Mono': true,
    },
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  },
})
