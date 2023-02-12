<script lang="ts" setup>
const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu menu-horizontal">
      <!-- Navbar menu content here -->
      <li v-for="(item, index) in props.items" :key="`ìtem-${index}`">
        <nuxt-link>{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
