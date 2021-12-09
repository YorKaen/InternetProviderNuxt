<template lang="pug">
svg.svg( :width="width" :height="height" viewBox='0 0 15 15' :fill="fill" xmlns='http://www.w3.org/2000/svg')
    path(d="M9.357 14.0925L9.12397 9.89721L2.73234 3.03396C2.44938 2.7265 2.7906 2.57773 3.16511 2.84552L11.0548 8.78639L14.467 7.49706C15.1993 7.24911 15.2077 6.64411 14.3005 6.20772L1.0096 0.0982373C0.40206 -0.229056 -0.18051 0.276761 0.0525186 1.38758L2.31622 14.0925C2.47435 14.9951 2.93208 15.2133 3.56458 14.7967L7.01007 11.7618L8.66624 13.676C8.85765 13.9041 9.01578 14.0925 9.357 14.0925Z")
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "icon-telegram",
  components: {},
  props: {
      fill: {type: String, default: 'black'},
      width: {type: [String, Number], default:40},
      height: {type: [String, Number], default: 40}
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  svg{
    transition: fill 0.3s ease-in-out;
  }

//Project Specific
</style>
