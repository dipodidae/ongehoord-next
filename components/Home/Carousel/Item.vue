<script lang="ts" setup>
const props = defineProps<{ item: any }>()
</script>

<template>
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog">
    <div class="p-6">
      <h4 class="title-font text-lg font-medium text-gray-900 mb-3">
        {{ props.item.title }}
      </h4>
      <p class="leading-relaxed mb-3">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
      </p>
      <div class="flex items-center flex-wrap">
        <nuxt-link v-slot="{ on }" to="/test">
          <ongehoord-button v-on="on">
            Lees meer
          </ongehoord-button>
        </nuxt-link>
        <ongehoord-share class="lg:ml-auto md:ml-0 ml-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
