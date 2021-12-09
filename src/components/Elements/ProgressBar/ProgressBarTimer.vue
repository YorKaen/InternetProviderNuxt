<template lang="pug">
.progress-bar
    .progress-bar__filled(:style="{ width: percent + '%'}" :class="{complete: isComplete}")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "ProgressBarTimer",
  components: {},
  props: {
    timeout: { type: Number, default: 10000 },
  },
  data: () => ({
    percent: 0,
    isComplete: true,
  }),
  created() {},
  mounted() {
    this.fillBar();
  },
  unmounted() {},
  methods: {
    fillBar() {
      if (this.percent < 100) {
        this.isComplete = false;
        setTimeout(() => {
          this.percent++;
          this.fillBar();
        }, this.timeout / 100);
      } else {
        this.isComplete = true;
      }
    },
      restartBar() {
          this.percent = 0;
          setTimeout(() => {
              this.fillBar();
          }, 1000);
      },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.progress-bar {
  &.timer-absolute-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    z-index: 2;
  }
  &.timer-fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5px;
    z-index: 2;
  }
  &__filled {
    transition: all 0.2s linear;
    width: 0;
    height: 5px;
    background-color: $primary;
    &.complete {
      opacity: 0;
      padding-bottom: 5px;
    }
  }
}
</style>
