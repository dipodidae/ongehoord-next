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
  <application-navigation :items="items" />
  <slot />

  <application-footer />
</template>

<style scoped></style>
