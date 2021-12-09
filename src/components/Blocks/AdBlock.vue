<template lang="pug">
.ad-block(:class="'ad-block__' + adblock.name").block.w-100.p-2.r-10.bg-black.txt-white
  .ad-block__title.pt-2 {{ adblock.title }}
  .ad-block__text.pt-2 {{ adblock.description }}
  a(:href="adblock.link").ad-block__button.btn.mt-3.r-10.hover-up
    .txt-black.btn-text-hide {{ adblock.linkName }}
    .btn-text-hover.txt-black {{ adblock.linkName }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "AdBlock",
  components: {},
  props: ["adblock"],
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific

.ad-block{
  border: 2px solid $primary;
  &__button{
    border: 2px solid $secondary;
    background-color: $secondary;
    position: relative;

    .btn-text-hide{
      opacity: 1;
      transform: translateY(0%);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 50ms, opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 10ms;
      pointer-events: none;
    }
    .btn-text-hover{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
      transition-property: transform, opacity;
    }
    &:hover{
      background-color: white;
      color: black;
      border-color: black;
      .btn-text-hide{
        opacity: 0;
        transform: translateY(-75%);
      }
      .btn-text-hover{
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  }
  &__title{
    font-size: em(18);
  }
  &__text{
    font-size: em(14);
  }
}

</style>
