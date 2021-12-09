<template lang="pug">
//-image-lazy(:srcImg="'block1.svg'")
//-image-lazy(:srcImg="'difam/block6-2.png'")
//img(loading="lazy", :src="require(`~/assets/img/${srcImg}`)", alt=altImg)
nuxt-picture(:src="`/img/${srcImg}`" format="webp" alt=altImg )
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "ImageLazy",
  components: {},
  props: {
    srcImg: String,
    altImg: {type:String,default:"Декоративный элемент"}
  },
  data: () => ({}),
  methods: {},
};
</script>

<style lang="scss" scoped>
//https://marquez.co/docs/nuxt-optimized-images/usage
</style>
