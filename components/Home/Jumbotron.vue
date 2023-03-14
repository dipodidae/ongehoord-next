<template>
  <header id="home-jumbotron" class="from-green-700 to-green-500 bg-gradient-to-b relative flex items-center justify-center mb-12 overflow-hidden">
    <div class="relative z-30 p-10 text-3xl font-display text-white border-y-2 border-white/20">
      <p class="text-4xl mb-4 font-semibold">
        Ontdek hoe dieren worden behandeld
      </p>
      <p>Bekijk undercover beeldmateriaal uit Nederlandse stallen</p>
    </div>
    <div class="absolute z-20 w-auto min-w-full min-h-full max-w-none from-green-800/80 to-green-500/90 bg-gradient-to-b" />
    <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
      <source src="/videos/home-jumbotron.mp4" type="video/mp4">
    </video>
  </header>
</template>

<style scoped>
#home-jumbotron {
  height: 50vh;
}
</style>
