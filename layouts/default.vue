<script lang="ts" setup>
interface NavigationItem {
  label: string
  to: string
}
const items: NavigationItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Onderzoek',
    to: '/onderzoek',
  },
  {
    label: 'Doe Mee',
    to: '/doe-mee',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]
</script>

<template>
  <div class="drawer bg-gradient-to-t from-blue-900 to-blue-500 h-[200vh]">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <site-navigation :items="items" />
      <!-- Page content here -->
      <slot />
      <site-footer />
    </div>
    <site-navigation-drawer :items="items" />
  </div>
</template>

<style scoped></style>
