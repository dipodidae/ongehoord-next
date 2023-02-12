<script lang="ts" setup>
const items = [
  {
    title: 'Varkens',
  },
  {
    title: 'Kippen',
  },
  {
    title: 'Nertsen',
  },
  {
    title: 'Legkippen',
  },
]
</script>

<template>
  <Flicking :options="{ align: 'prev', circular: true }">
    <home-carousel-item v-for="(item, index) in items" :key="`item-${index}`" :item="item" />
  </Flicking>
</template>

<style scoped></style>
