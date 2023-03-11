<script setup lang="ts">
const props = withDefaults(defineProps<{
  sidebar?: boolean
}>(), { sidebar: true })

const InvestigationTargetCategories: InvestigationTargetCategory[] = [
  {
    title: 'Kippen',
    investigationTargets: [
      {
        title: 'test',
        content: 'test',
        location: {
          lat: 2,
          lon: 2,
        },
      },
    ],
  },
]
</script>

<template>
  <div class="grid grid-cols-4">
    <locations-container-sidebar v-if="props.sidebar" :investigation-target-categories="InvestigationTargetCategories" />
    <locations-map :class="{ 'col-span-3': props.sidebar }" :investigation-target-categories="InvestigationTargetCategories" />
  </div>
</template>
