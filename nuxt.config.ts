import { appDescription } from './constants/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      tokenGoogleMaps: '',
    },
  },

  build: { transpile: ['@fawmi/vue-google-maps'] },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@fawmi/vue-google-maps',
        'fast-deep-equal',
      ],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
  ],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/input.css',
  },

  googleFonts: {
    families: {
      'Atkinson+Hyperlegible': {
        wght: [400, 700],
        ital: [400],
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
