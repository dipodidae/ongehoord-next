<script setup lang="ts">
const props = defineProps<{
  investigationTargetCategories: InvestigationTargetCategory[]
}>()

const center: GeoLocation = {
  lat: 49.9799903,
  lng: 1.3637905,
}
</script>

<template>
  <GMapMap
    :center="center"
    :zoom="7"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
    }"
    class="h-full"
  />
</template>
