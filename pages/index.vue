<script lang="ts" setup>
</script>

<template>
  <home-jumbotron />
  <section class="py-5 md:py-20">
    <div>
      <header class="mb-5 md:mb-20">
        <h1 class="title">
          Onderzoek
        </h1>
      </header>
      <home-carousel class="mr-10 last:mr-0" />
    </div>
  </section>
  <section class="bg-gray-100 py-5 md:py-20">
    <header>
      <h1 class="title">
        Locaties
      </h1>
      <locations-container sidebar style="height:80vh" />
    </header>
  </section>
</template>

<style scoped></style>
