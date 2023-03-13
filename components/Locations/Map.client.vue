<script setup lang="ts">
const props = defineProps<{
  investigationTargetCategories: InvestigationTargetCategory[]
}>()

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

let map: google.maps.Map

function initializeMap() {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions)
}
onMounted(() => {
  nextTick(initializeMap)
})
</script>

<template>
  <div id="map" ref="mapElement" class="h-full bg-blue-300" />
</template>
