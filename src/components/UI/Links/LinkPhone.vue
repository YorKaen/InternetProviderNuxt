<template lang="pug">
//-link-phone(:srcLink="'+7 (111) 11-11-111'")
a.link.link-tel(:href="'tel:' +  returnLink") {{ srcLink }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "LinkPhone",
  components: {},
  props: {
    srcLink: String,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
  computed: {
    returnLink() {
      return this.srcLink.replace(/[)(\s-]+/g, "");
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
</style>
