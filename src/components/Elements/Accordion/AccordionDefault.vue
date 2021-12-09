<template lang="pug">
.accordion
  .accord(v-for="(item, index) in items" v-on:click="openItem(item)")
    .accord-title 
      .txt.label-1.fw-m {{item.title}}
      .close(v-bind:class="{'open': item.isopen}")
    .accord-body(v-bind:class="{'open': item.isopen}") {{item.content}}

</template>

<script>
export default {
  name: "Accordion",
  data: () => ({}),
  props: ["items"],
  methods: {
    openItem: function (item) {
      item.isopen = !item.isopen;
      //console.log(item);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";

.close {
  margin-left: auto;
  width: 40px;
  height: 40px;
  background-color: $blue;
  border-radius: 100%;
  position: relative;
  flex: 0 0 40px;
  &::before {
    position: absolute;
    content: "";
    width: 15px;
    height: 2px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    position: absolute;
    content: "";
    width: 15px;
    height: 2px;
    top: 50%;
    left: 30%;
    background-color: white;
    transform: rotate(90deg) translateY(-50%);
  }
}
.accord {
  margin-bottom: 20px;
  cursor: pointer;
  //display: flex;
  //flex-direction: column;
  &-title {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  &-body {
    padding-right: 60px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    &.open {
      max-height: 400px;
      transition: max-height 1s ease-in-out;
    }
  }
  .close {
    transition: all 0.3s ease-in-out;
    &.open {
      transform: rotate(130deg);
      &::before {
        width: 18px;
        height: 2px;
        top: 48%;
        left: 50%;
        transform: translateX(-50%);
      }
      &::after {
        width: 18px;
        height: 2px;
        top: 48%;
        left: 25%;
        transform: rotate(95deg) translateY(-50%);
      }
    }
  }
}
</style>
