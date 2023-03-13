<script setup lang="ts">
const props = withDefaults(defineProps<{
  sidebar?: boolean
}>(), { sidebar: false })

const investigationTargetCategories: InvestigationTargetCategory[] = [
  {
    title: 'Kippen',
    investigationTargets: [
      {
        title: 'test',
        content: 'test',
        location: {
          lat: 2,
          lng: 2,
        },
      },
    ],
  },
]
</script>

<template>
  <div class="grid grid-cols-4">
    <locations-container-sidebar v-if="props.sidebar" :investigation-target-categories="investigationTargetCategories" />
    <locations-map :class="{ 'col-span-3': props.sidebar }" :investigation-target-categories="investigationTargetCategories" />
  </div>
</template>
