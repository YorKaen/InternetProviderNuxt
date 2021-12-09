<template lang="pug">
//-vue3 не поддерживается модулем, так что вручную пока
.map-wrapper
    #map
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "MapsYandex",
  components: {},
  props: {
      coords: null
  },
  data: () => ({
    ymapsScriptData: null,
  }),
  created() {
    this.ymapsScriptData = document.createElement("script");
    this.ymapsScriptData.setAttribute(
      "src",
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
    );
    this.ymapsScriptData.setAttribute("data-ymaps", "1");
    document.head.appendChild(this.ymapsScriptData);
    this.ymapsScriptData.onload = () => {
      ymaps.ready(() => {
        this.init();
      });
    };
  },
  mounted() {},
  unmounted() {},
  beforeUnmount() {
    this.cleanCss();
    this.cleanJS();
  },
  methods: {
    init() {
      var myMap = new ymaps.Map("map", {
        center: this.coords,
        zoom: 14,
        controls: [],
      });
      var myPlacemark = new ymaps.Placemark(this.coords, {});
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable(["scrollZoom", "drag"]);
    },
    cleanCss() {
      let leftOverCss = document.head.getElementsByTagName("style");
      for (let i = leftOverCss.length; i >= 0; i--) {
        if (
          leftOverCss[i] &&
          leftOverCss[i].getAttribute("data-ymaps") != null
        ) {
          leftOverCss[i].parentNode.removeChild(leftOverCss[i]);
        } else {
          //console.log("ничего нет")
        }
      }
    },
    cleanJS() {
      let leftOverJS = document.head.getElementsByTagName("script");
      for (let i = leftOverJS.length; i >= 0; i--) {
        if (leftOverJS[i] && leftOverJS[i].getAttribute("data-ymaps") != null) {
          leftOverJS[i].parentNode.removeChild(leftOverJS[i]);
        } else {
          //console.log("ничего нет")
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.map-wrapper {
  display: flex;
  width: 100%;
  height: 500px;
  max-width: 1270px;
}
#map {
  width: 100%;
  height: 230px;
  @include breakpoint(lg) {
    width: 100%;
    height: 100%;
    max-height: 676px;
    max-width: 1270px;
  }
}
</style>
