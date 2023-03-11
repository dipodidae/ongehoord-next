<script setup lang="ts">
const props = defineProps<{
  investigationTargetCategories: InvestigationTargetCategory[]
}>()

const center: GeoLocation = {
  lat: 49.9799903,
  lon: 1.3637905,
}
</script>

<template>
  <GMapMap
    :center="center"
    :zoom="15"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
    }"
    style="height: 100%; "
  />
</template>
