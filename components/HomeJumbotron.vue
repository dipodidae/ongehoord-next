<script lang="ts" setup>
const breakpoints = useTailwindBreakpoints()
</script>

<template>
  <VideoBackground
    id="home-jumbotron"
    src="/videos/home-jumbotron.mp4"
    overlay="linear-gradient(0deg,#15634bff,#26b48980)"
    :class="useBreakpointClasses()"
    class="md:min-h-120 min-h-full"
  >
    <div id="home-jumbotron-content">
      <p class="">
        Ontdek hoe dieren worden behandeld
      </p>
      <p class="">
        Bekijk undercover beeldmateriaal <br class="">
        uit Nederlandse stallen
      </p>
    </div>
  </VideoBackground>
</template>

<style lang="scss" scoped>
#home-jumbotron {
  mask-size: 2000px;
  mask-repeat: no-repeat;
  mask-position: center bottom;

  &.is-md {
      mask-image: url('/jumbotron-mask.svg');
      height: 501px;
  }

  &.is-sm {
      height: 400px;
      mask-image: url('/jumbotron-mask-sm.svg');
  }

  &::v-deep {
      .videobg-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }
  }
}

#home-jumbotron-content {
  padding: 59px;
  border: 2px solid transparentize($color: #ffffff, $amount: 0.9);
  border-width: 2px 0;
  color: white;
  text-shadow: 0 1px 1px #000;
  line-height: 1.5;
  font-family: hypatia;
  font-weight: 500;
  max-width: 800px;

  margin-top: -36px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: left;

  .is-sm & {
      padding: 18px;
  }

  .content-1 {
      font-size: 43px;

      .is-sm & {
          font-size: 18px;
      }
  }

  .content-2 {
      font-size: 37px;

      .is-sm & {
          font-size: 16px;
      }
  }
}
</style>
