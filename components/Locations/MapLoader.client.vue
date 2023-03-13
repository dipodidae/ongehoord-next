<script lang="ts" setup>
import { useMapsStore } from '@/stores/maps'

const props = defineProps<{
  investigationTargetCategories: InvestigationTargetCategory[]
}>()

const store = useMapsStore()
</script>

<template>
  <locations-map
    v-if="store.loaded"
    :investigation-target-categories="props.investigationTargetCategories"
  />
  <div v-else>
    test
  </div>
</template>
