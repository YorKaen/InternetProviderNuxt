<template lang="pug">
//-section-basic(:src-name="'contacts'" isFull isSplit)
//- template(v-slot:title)
//- template(v-slot:content)
//- template(v-slot:content-left)  template(v-slot:content-right)
section.section(:class="'section__' + srcName").clearfix
    .section-container.container(:class="{'is-full': isFull} ")
        slot(name="content")
        //-.title(:class="srcName + '__title'" v-if="hasTitleSlot")
            slot(name="title")
        //.content(:class="srcName  + '__content'" v-if="hasContentSlot")
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "SectionBasic",
  components: {},
  props: {
    srcName: String,
    isFull: Boolean,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
  computed: {
    hasContentSlot() {
      return !!this.$slots.content;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
