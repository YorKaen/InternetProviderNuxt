<template lang="pug">
.svg(v-html="require(`@/assets/img/${srcImg}`)")
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "ImageSVG",
  components: {},
  props: {
    srcImg: { type: String, default: "svg/missing.svg" },
  },
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss" scoped>
//https://marquez.co/docs/nuxt-optimized-images/usage
</style>
