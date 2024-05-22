<script lang="ts" setup>
const props = defineProps<{
  items: any[]
}>()

const { y } = useWindowScroll()

const scrollColorsOpaque = 'shadow-blue-600/0 border-blue-700/0'
const scrollColors = 'shadow-blue-600/50 border-blue-700'

const scrolling = computed(() => y.value > 100)

const colorClasses = computed(() => y.value > 100 ? scrollColors : scrollColorsOpaque)

const backgroundClasses = computed(() => scrolling.value ? 'after:opacity-100' : 'after:opacity-0')
</script>

<template>
  <nav class="duration-600 border-b shadow-md bg-gradient-to-b transition-colors transition-shadows duration-500 fixed z-40 w-full  top-0 left-0  " :class="colorClasses">
    <div class="h-20 px-2 sm:px-4 py-2.5 after:content-[''] after:duration-500 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:from-blue-700 after:to-blue-700  after:border-blue-900 after:bg-gradient-to-b after:transition-opacity" :class="backgroundClasses">
      <div class="container flex flex-wrap items-center justify-between mx-auto z-20 relative">
        <nuxt-link to="/" class="flex items-center">
          <img src="~/assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Ongehoord logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white font-display">Ongehoord</span>
        </nuxt-link>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
        <div id="navbar-default" class="hidden w-full md:block md:w-auto">
          <ul class="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li v-for="item in props.items" :key="item">
              <nuxt-link :to="item.to" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" aria-current="page">
                {{ item.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
