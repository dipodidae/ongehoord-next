import { defineStore } from 'pinia'

export const useMapsStore = defineStore('maps', () => {
  const loaded = ref(false)

  function setLoaded() {
    loaded.value = true
  }

  return { loaded, setLoaded }
})
