// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // nitro: {
  //   prerender: {
  //     routes: ["/resume"],
  //     ignore: ["/dynamic"],
  //   },
  // },
  experimental: {
    inlineRouteRules: true,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime',
    '@nuxt/icon',
    '@nuxt/ui',
  ],
  googleFonts: {
    families: {
      'Libre Barcode 39 Text': true,
      'Libre Barcode 128 Text': true,
      'David Libre': true,
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
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  ui: {
    breadcrumb: {
      wrapper: 'relative min-w-0',
      ol: 'flex items-center gap-x-1.5',
      li: 'flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0',
      base: 'flex items-center gap-x-1.5 group font-semibold min-w-0',
      label: 'block truncate',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
        active: '',
        inactive: '',
      },
      divider: {
        base: 'flex-shrink-0 w-5 h-5 rtl:rotate-180',
      },
      active: 'text-primary-500 dark:text-primary-400',
      inactive: ' hover:text-gray-700 dark:hover:text-gray-200',
      default: {
        divider: 'i-heroicons-chevron-right-20-solid',
      },
    },
  },
  // anime: {
  //   composables: true,
  // },
})
