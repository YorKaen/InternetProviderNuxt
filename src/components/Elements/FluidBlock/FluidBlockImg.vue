<template lang="pug">
.item
  .item__img
    img(loading="lazy", :src="require(`@/assets/img/${fluidblock.imgName}`)", alt="")
  .item__label.label-1 {{fluidblock.txtLabel}}
  .item__text.txt {{fluidblock.txtText}}

</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "FluidBlockImg",
  components: {},
  data: () => ({}),
  props: ["fluidblock"],
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.creditio-block-2__item {
  padding: 0 20px 25px 20px;
  &.item {
    overflow: hidden;
    border: 2px solid $blue;
    border-radius: 20px;
    .item__label {
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }

  @include breakpoint(md) {
    padding: 0 50px 30px 30px;
    display: grid;
    grid-template-columns: 132px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    grid-template-areas:
      "img label"
      "img text";
    .item__img {
      grid-area: img;
    }
    .item__label {
      grid-area: label;
      margin: auto 0 0 0;
    }
    .item__text {
      grid-area: text;
    }
  }
  @include breakpoint(lg) {
    padding: 0 50px 0px 30px;
    grid-template-rows: 1fr 0.8fr;

    grid-template-areas:
      "img label"
      "text text";
    .item__label {
      margin-top: 25px;
      font-size: em(20);
    }
  }
}

.creditio-block-3__item {
  &.item {
    overflow: hidden;
    border: 2px solid $blue;
    border-radius: 20px;
    .item__label {
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }
  padding: 28px 30px 25px 0px;
  .item__label {
    margin-left: 20px;
  }
  .item__text {
    margin-left: 20px;
  }
  @include breakpoint(md) {
    border-radius: 20px;
  }
  @include breakpoint(lg) {
    .item__label {
      max-width: 260px;
    }
  }
}
</style>
