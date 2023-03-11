// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      tokenGoogleMaps: '',
    },
  },
  build: { transpile: ['@fawmi/vue-google-maps'] },
  modules: [
    'nuxt-vitest',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-swiper',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    'nuxt-lodash',
  ],
})
