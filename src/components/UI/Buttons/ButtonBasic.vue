<template lang="pug">
button.btn
  .txt {{ srcText }}
</template>

<script>
// import XXX from "@/components/XXX.vue";

export default {
  name: "btnBasic",
  components: {},
  props: {
    srcText: String,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  padding: 8px 12px;
  position: relative;
  overflow: hidden;
}
</style>
