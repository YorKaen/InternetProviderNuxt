<template lang="pug">
.debug

</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "DEBUG",
  components: {},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.debug {
  position: fixed;
  top: 0;
  z-index: 99999;
  &::before {
    content: "xs_ DONT FORGET TO DELETE";
    position: fixed;
    top: 0;
    z-index: 999;
    font-size: 10px;
    color: red;
  }
  @media (max-width: 375px) {
    &::before {
      content: "ERROR_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-xs) {
    &::before {
      content: "xs_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-sm) {
    &::before {
      content: "sm_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-md) {
    &::before {
      content: "md_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-lg) {
    &::before {
      content: "lg_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-xl) {
    &::before {
      content: "xl_ DONT FORGET TO DELETE";
    }
  }
  @media (min-width: $screen-xxl) {
    &::before {
      content: "xxl_ DONT FORGET TO DELETE";
    }
  }
}
</style>
