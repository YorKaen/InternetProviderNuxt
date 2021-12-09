<template lang="pug">
//-link-mail(:srcLink="''")
a.link(:href='srcLink') {{ srcLink }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "LinkMail",
  components: {},
  props: {
    srcLink: String,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
</style>
