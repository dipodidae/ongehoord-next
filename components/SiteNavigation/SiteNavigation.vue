<script lang="ts" setup>
const props = defineProps<{
  items: any[]
}>()

const socials = [
  {
    label: 'Twitter',
    iconName: 'cib:twitter',
    to: 'twitter',
  },
  {
    label: 'Instagram',
    iconName: 'cib:instagram',
    to: 'instagram',
  },
  {
    label: 'Facebook',
    iconName: 'cib:facebook',
    to: 'facebook',
  },
]
</script>

<template>
  <nav class="bg-gradient-to-b from-blue-700/80 to-blue-700/90 px-2 sm:px-4 py-5  fixed w-full z-20 top-0 left-0 border-b border-blue-900 after:h-2 before:content-none before:bg-red before:top-0 before:left-0 before:w-100 before:fixed">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <nuxt-link to="/" class="flex items-center">
        <img src="~/assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Ongehoord logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Ongehoord</span>
      </nuxt-link>
      <div class="flex md:order-2 gap-2">
        <button v-for="social in socials" :key="social" type="button" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
          <span class="sr-only">{{ social.label }}</span>
          <Icon :name="social.iconName" />
        </button>
        <nuxt-link to="/doneren" class="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3  ">
          Doneer
        </nuxt-link>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <ul class="justify-between hidden w-full md:flex md:w-auto md:order-1 gap-2">
        <li v-for="item in items" :key="item">
          <nuxt-link :to="item.to" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" aria-current="page">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
