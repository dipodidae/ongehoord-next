<script lang="ts" setup>
const props = defineProps<{ label: string, iconName: string }>()
</script>

<template>
  <button type="button" class="absolute bottom-0 z-30 flex items-center justify-center md:h-full px-4 cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue group-hover:bg-blue-700 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
      <icon :name="props.iconName" class="text-blue-100 group-hover:text-blue-50" />
      <span class="sr-only">{{ props.label }}</span>
    </span>
  </button>
</template>
