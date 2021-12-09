<template lang="pug">
//-link-phone(:srcLink="'+7 (111) 11-11-111'")
a.link.link-tel(:href="'tel:' +  returnLink")
  icon-call(:width="'24'" :height="'24'" fill="#2DC698").mr-2.mt-a.mb-a
  .txt {{ srcLink }}
</template>

<script>
// import XXX from "@/components/XXX.vue";
import IconCall from '../Icons/Call'
export default {
  name: "LinkPhoneIcon",
  components: { IconCall },
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
.link-tel{
  display: flex;
  &:hover{
    svg{
      fill: white;
    }
  }
}

</style>
