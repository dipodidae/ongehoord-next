<script lang="ts" setup>
const items = [
  {
    title: 'Varkens',
  },
  {
    title: 'Kippen',
  },
  {
    title: 'Nertsen',
  },
  {
    title: 'Legkippen',
  },
  {
    title: 'Ander dier',
  },
  {
    title: 'Nog een ander dier',
  },
]
const breakpoints = useTailwindBreakpoints()

const slidesPerView = computed(() => {
  if (breakpoints.lg.value)
    return 4

  if (breakpoints.md.value)
    return 3

  return 1
})
</script>

<template>
  <div class="relative pb-20">
    <swiper
      :modules="[SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
      :slides-per-view="slidesPerView"
      :navigation="{
        nextEl: '[data-carousel-next]',
        prevEl: '[data-carousel-previous]',
      }"
      :space-between="20"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'inline-block my-3 w-4 mx-2 h-4 bg-blue-200 rounded-full hover:bg-blue-500 hover:cursor-pointer ',
        bulletActiveClass: 'bg-blue-400',
        clickable: true,
      }"
    >
      <swiper-slide v-for="(item, index) in items" :key="`item-${index}`">
        <home-carousel-item :item="item" />
      </swiper-slide>
    </swiper>
    <home-carousel-control-button data-carousel-previous label="Vorige" class="left-0" icon-name="fa6-solid:chevron-left" />
    <home-carousel-control-button data-carousel-next label="Volgende" class="right-0" icon-name="fa6-solid:chevron-right" />
    <div class="swiper-pagination" />
  </div>
</template>

<style scoped></style>
