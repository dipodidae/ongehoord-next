import VideoBackground from 'vue-responsive-video-background-player'

// eslint-disable-next-line no-undef
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VideoBackground', VideoBackground)
})
