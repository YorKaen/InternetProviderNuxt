<template lang="pug">
.item
  .item__label.txt {{fluidblock.txtLabel}}
  .item__text.txt {{fluidblock.txtText}}

</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "FluidBlockText",
  components: {},
  data: () => ({}),
  props: ["fluidblock"],
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.block-02__item {
  border: 2px solid #4cc9f0;
  border-radius: 20px;
  &.item {
    padding: 25px 30px 30px 30px;
    .item__label {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 30px;
    }
    .item__text {
      font-weight: normal;
      font-size: 18px;
    }
  }
}
.block-03__item {
  border-radius: 20px;
  background-color: #f9fafe;
  &.item {
    padding: 25px 30px 30px 30px;
    .item__label {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 30px;
    }
    .item__text {
      font-weight: normal;
      font-size: 18px;
    }
  }
}
//creditio
.creditio-1__item {
    padding-left: 18px;
    margin-bottom: 15px;

    .item__label {
        color: white;
        font-size: em(20);
    }
    .item__text {
        color: white;
    }
    @include breakpoint(md) {
        margin: 0;
        background-color: $shape;
        border-radius: 20px;
        border: 1px solid $blue;
        padding: 20px 10px 20px 40px;
        .item__label {
            color: $blue;
            &:before {
                top: 0.7em;
            }
        }
        .item__text {
            color: black;
        }
    }
    @include breakpoint(lg) {
        background-color: unset;
        border: unset;
    }
    .item__label {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color:#60D313;
            border-radius: 100%;
            top: 0.6em;
            left: -18px;
        }
    }
}

</style>
