<script lang="ts" setup>
const breakpointClasses = useBreakpointClasses()
</script>

<template>
  <video-background
    id="home-jumbotron"
    src="/videos/home-jumbotron.mp4"
    overlay="linear-gradient(0deg,#15634bff,#26b48980)"
    :class="breakpointClasses"
    class="md:min-h-120 min-h-full"
  >
    <div id="home-jumbotron-content">
      <p class="font-display">
        Ontdek hoe dieren worden behandeld
      </p>
      <p class="font-display">
        Bekijk undercover beeldmateriaal <br>
        uit Nederlandse stallen
      </p>
    </div>
  </video-background>
</template>

<style scoped>
#home-jumbotron {
  mask-size: 2000px;
  mask-repeat: no-repeat;
  mask-position: center bottom;
}

#home-jumbotron.is-md {
  mask-image: url('~/assets/masks/jumbotron-mask.svg');
  height: 501px;
}
#home-jumbotron.is-sm {
  height: 400px;
  mask-image: url('~/assets/masks/jumbotron-mask-sm.svg');
}

#home-jumbotron :deep(.videobg-content) {
  display: flex;
  align-items: center;
  justify-content: center;
}

#home-jumbotron-content {
  padding: 59px;
  border: 2px solid rgb(255 255 255 / 90%);
  border-width: 2px 0;
  color: white;
  text-shadow: 0 1px 1px #000;
  line-height: 1.5;
  font-family: "hypatia";
  font-weight: 500;
  max-width: 800px;

  margin-top: -36px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: left;

}
</style>
