<script setup lang="ts">
const mapElement = ref()

const mapId = '459ac89d964cd5c8'

const center: GeoLocation = {
  lat: 49.9799903,
  lng: 1.3637905,
}

const mapOptions: google.maps.MapOptions = {
  center,
  zoom: 12,
  mapId,
}

const mapInstance = ref()

onMounted(() => {
  mapInstance.value = new google.maps.Map(mapElement.value, mapOptions)
})
</script>

<template>
  <div id="map" ref="mapElement" class="h-full bg-blue-300" />
</template>
