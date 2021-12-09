<template lang="pug">
.index.mt-5
  .container.mt-5
    h3.txt.txt-white Здравствуйте, {{ this.$store.state.global.userId }} !


</template>

<script>

export default {
  name: 'LK',
  layout: 'main',
  components: {  },
  props: {},
  data: () => ({

  }),
  created() {
    console.log(this.$route.query)
    console.log(this.$route.query.plan)
    console.log(this.$route.params)
    console.log(this.$route.params.userName)
  },
  computed: {},
  mounted() {},
  beforeMount() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mymixins.scss";

</style>
