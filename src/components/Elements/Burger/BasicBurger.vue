<template lang="pug">
.burger(:class="{active : burgerIsActive}")
    transition(name="burger")
        .burger-menu(v-if="burgerIsActive" :class="'bg-' + menuColor")
            .burger-nav(@click="closeBurger()")
                slot
    .burger-button-wrapper(:class="{active : burgerIsActive}")
        .burger-button(@click.prevent="burgerToggle()")
            .push-me.push-me-01(:class="'bg-' + burgerColor")
            .push-me.push-me-02(:class="'bg-' + burgerColor")
            .push-me.push-me-03(:class="'bg-' + burgerColor")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "BasicBurger",
  components: {},
  data: () => ({
    burgerIsActive: false,
    width: String,
  }),
  props: {
    burgerColor: { type: String, default: "black" },
    menuColor: { type: String, default: "white" },
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    burgerToggle() {
      this.burgerIsActive = !this.burgerIsActive;
    },
    closeBurger() {
      this.burgerIsActive = false;
    },
    handleResize() {
      this.width = window.innerWidth;
      //burgerFixOnResize
      if (this.width >= 992) {
        this.burgerIsActive = false;
      }
    },
  },
  computed: {},
  watch: {
    // блокирует скролл
    burgerIsActive: function () {
      document.body.style.overflow = this.burgerIsActive ? "hidden" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
//-добавить разные анимации для разного появления, добавить переменные, переделать с бефоре.афтер на линии для больших возможностей анимации
@import "burger";
//-Стили проекта
.bg-difam {
  background-color: #6fba6d;
}
</style>
