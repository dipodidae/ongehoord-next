import VideoBackground from 'vue-responsive-video-background-player'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VideoBackground', VideoBackground)
})
