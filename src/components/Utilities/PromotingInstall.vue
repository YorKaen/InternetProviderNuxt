<template lang="pug">
.bot-message(v-if="deferredPrompt") Вы можете установить этот сайт как мини-приложение, к себе на телефон или пк!
    .buttons
        button.btn(@click="dismiss()")
            .txt Спасибо, нет
        button.btn(@click="install()")
            .txt Да, давайте!
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "PromotingInstall",
  components: {},
  data: () => ({
    deferredPrompt: null,
  }),
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  mounted() {},
  unmounted() {},
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
  },
};
</script>

<style lang="scss" scoped>
.bot-message {
  display: block;
  z-index: 99999;
  position: fixed;
  background: $dark-1;
  border-radius: 20px 00px 0px 0px;
  border: 1px solid black;
  color: white;
  width: 100%;
  max-width: 340px;
  right: 0;
  bottom: 0;

  text-align: center;
  padding: 10px;
  @include breakpoint(md) {
    max-width: 410px;
  }
  .buttons {
    margin: 15px 25px;
    display: flex;
    justify-content: space-between;
    .btn {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
