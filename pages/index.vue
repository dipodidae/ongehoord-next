<script lang="ts" setup>
</script>

<template>
  <div>
    <home-jumbotron />
    <section class="py-5 md:py-20">
      <div>
        <header class="mb-5 md:mb-20">
          <h1 class="text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Onderzoek
          </h1>
        </header>
        <home-carousel class="mr-10 last:mr-0" />
      </div>
    </section>
    <section class="bg-gray-100 py-5 md:py-20">
      <header>
        <h1 class="text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 text-center">
          Map
        </h1>
        <locations-container sidebar style="height:80vh" />
      </header>
    </section>
    <section class="bg-gray-600">
      <header>
        <h1>
          Test
        </h1>
      </header>
      <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        Tailwind Snippets
      </button>
    </section>
  </div>
</template>

<style scoped></style>
