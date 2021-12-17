<template lang="pug">
.index.mt-5
  .container.mt-5
    h3.txt.txt-white Здравствуйте, {{ this.$store.state.global.userId }} !
    button.btn(@click="sortArray(arrayToSort)")
      .txt Sort

</template>

<script>

export default {
  name: 'LK',
  layout: 'main',
  components: {  },
  props: {},
  data: () => ({
      arrayToSort:[{ value: '616 314' }, { value: '323 314' }, { value: '173 314' }, { value: '723 994' }, { value: '923 314' }, { value: '252 322' }]
  }),
  created() {
    //console.log(this.$route.query)
    //console.log(this.$route.query.plan)
    //console.log(this.$route.params)
    //console.log(this.$route.params.userName)
  },
  computed: {},
  mounted() {
    console.log('this')
    console.log(this.arrayToSort)
    //this.storeItems(this.arrayToSort)
    console.log('local')
    console.log(this.$store.state.local.arrayStore)
    //this.sortArray(this.arrayToSort)

  },
  beforeMount() {},
  beforeDestroy() {},
  methods: {
    storeItems(newArray) {
      this.$store.commit('local/setStorageItems', newArray)
      //console.log(this.$store.state.local.arrayStore)
    },
    sortArray(x){
      console.log('sort')
      console.log(x.sort( this.compareArr ))
     //for (let i; i < x.length; i++){
     //  console.log(x[value].sort().reverse())
     //}
      //console.log(x.sort().reverse())
      //this.storeItems(x.sort().reverse())
    },
    compareArr( a, b ) {
      if ( a.value < b.value ){
        return 1;
      }
      if ( a.value > b.value ){
        return -1;
      }
      return 0;
    }
  },
}
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mymixins.scss";
.index{
  height: 100%;
  min-height: 100vh;
}
</style>
