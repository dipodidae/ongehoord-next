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
  <div class="pb-20 bg-gray-50">
    <site-navigation :items="items" />
    <slot />

    <site-footer />
  </div>
</template>

<style scoped></style>
