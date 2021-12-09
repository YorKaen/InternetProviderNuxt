<template lang="pug">
transition(name="right")
    .banner(v-if='isOpen')
        .banner-progress
            progress-bar-timer(class="timer-absolute-top" :timeout="timeout" )
        .banner-dismiss
            button.btn-dismiss(@click="closeBanner()")
        .banner-text
            .txt {{ bannerText }}
        slot
</template>

<script>
// import XXX from "@/components/XXX.vue";


import ProgressBarTimer from "../ProgressBar/ProgressBarTimer";
export default {
  name: "BannerBasic",
  components: {ProgressBarTimer },
  props: {
    bannerText: String,
    timeout: Number,
  },
  data: () => ({
    isOpen: false,
  }),
  created() {},
  mounted() {
    this.appear();
  },
  unmounted() {},
  methods: {
    closeBanner() {
      this.isOpen = false;
    },
    showBanner() {
      this.isOpen = true;
    },
    appear() {
      setTimeout(() => (this.isOpen = true), 1000);
      setTimeout(() => (this.isOpen = false), this.timeout + 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: auto;
  max-width: 250px;
  z-index: 999;
  border-radius: 8px;
  //max-height: 50px;
  background-color: $dark-1;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: inset 0 0 0 3px $white;
  }
  &.color-white {
    .banner-text {
      color: $white;
    }
  }
  &.top {
    top: 16px;
  }
  &.left {
    left: 16px;
  }
  &.right {
    right: 16px;
  }
  ///////////////
  &-progress {
    position: relative;
    z-index: 0;
    margin-top: 0px;
  }
  &-text {
    padding: 15px 25px 15px 15px;
    font-size: em(14);
  }
  &-dismiss {
    display: flex;
    position: relative;
    align-self: flex-end;
  }
}
</style>
