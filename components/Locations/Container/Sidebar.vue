<script setup lang="ts">
const props = defineProps<{
  investigationTargetCategories: InvestigationTargetCategory[]
}>()
</script>

<template>
  <div class="bg-blue">
    <header><h2>Locations</h2></header>
    <div>
      <div v-for="category in props.investigationTargetCategories" :key="category.title">
        <header>
          <h4>{{ category.title }}</h4>
        </header>
        <div>
          <div v-for="target in category.investigationTargets" :key="target.title">
            {{ target.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
