import { useMapsStore } from '@/stores/maps'
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const store = useMapsStore()

  const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${config.public.tokenGoogleMaps}&v=weekly&libraries=places`

  useScriptTag(apiUrl, () => {
    store.setLoaded()
  }, { defer: true })
})
