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
  <nav class="fixed w-full top-0 left-0  z-20  border-b border-blue-900 before:h-2 before:content-none before:bg-red before:top-0 before:left-0 before:w-100 before:fixed ">
    <div class="relative px-2 sm:px-4 py-5 after:bg-gradient-to-b after:from-blue-700 after:to-blue-700 after:blend-mode-screen after:content-[''] after:w-full after:h-20 after:top-0 after:left-0 after:absolute after:block after:z-30 before:block before:content-[''] before:-bottom-3 before:left-0 before:z-50 before:h-3 before:absolute  before:w-full  before:bg-gradient-to-b before:from-slate-700/40 before:to-slate-700/0 ">
      <div class="relative container flex flex-wrap items-center justify-between mx-auto z-40">
        <nuxt-link to="/" class="flex items-center">
          <img src="~/assets/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Ongehoord logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Ongehoord</span>
        </nuxt-link>
        <div class="md:order-2 gap-2 hidden md:flex">
          <button v-for="social in socials" :key="social" type="button" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
            <span class="sr-only">{{ social.label }}</span>
            <Icon :name="social.iconName" />
          </button>
        </div>
        <div class="flex">
          <nuxt-link to="/doneren" class="focus:outline-none text-blue-600 bg-yellow-50 focus:ring-4 hover:bg-white focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3  ">
            Doneren
          </nuxt-link>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <icon name="mdi:menu" size="20" />
          </button>
        </div>
        <ul class="justify-between hidden md:flex w-full md:w-auto md:order-1 gap-2">
          <li v-for="item in props.items" :key="item">
            <nuxt-link :to="item.to" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" aria-current="page">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
