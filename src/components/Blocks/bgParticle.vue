<template lang="pug">
.particles-js
  client-only
    particles-bg(:bg="true" num=10 type="square")

</template>

<script>
// import XXX from "@/components/XXX.vue";
//import "particles.js"

export default {
  name: "bgParticle",
  components: {},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {
  },
  unmounted() {},
  methods: {
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.particles {
  position: relative;
}
.particles-js{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 3px solid $primary;
}

</style>
