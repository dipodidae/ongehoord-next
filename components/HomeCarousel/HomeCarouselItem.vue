<script lang="ts" setup>
const props = defineProps<{ item: any }>()
</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://picsum.photos/200/300" alt="Movie"></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ props.item.title }}
      </h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">
          Watch
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
