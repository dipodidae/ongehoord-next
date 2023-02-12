<script lang="ts" setup>
const props = defineProps<{
  items: any[]
}>()

const socials = [
  {
    label: 'Facebook',
    to: 'facebook',
  },
  {
    label: 'Instagram',
    to: 'instagram',
  },
  {
    label: 'Twitter',
    to: 'twitter',
  },
]
</script>

<template>
  <div class="w-full navbar h-16 sticky top-0 bg-blue-600 text-blue-50">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </label>
      </div>
      <div>
        <nuxt-link to="/" class="flex-1 px-2 mx-2 flex items-center text-blue-50 hover:text-blue-100 p-3">
          <img src="~/assets/images/logo.svg" width="32" alt="" class="mr-3">
          <span>Ongehoord</span>
        </nuxt-link>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal">
        <li v-for="(item, index) in props.items" :key="`ìtem-${index}`">
          <nuxt-link :to="item.to" class="text-blue-100 hover:text-blue-50 hover:bg-blue-700">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal">
        <li v-for="social in socials" :key="social.to">
          <nuxt-link :to="social.to">
            {{ social.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
