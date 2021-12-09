<template lang="pug">
.search-bar.d-grid
    .search-bar__input.d-flex.flex-center.mt-5.w-100
        input(v-model="postsFilter" placeholder="Поиск по автору...").form-input.w-100.brd-primary
    .posts
        .posts-container.d-grid.grid-1.gap-20.mt-3.grid-md-2.grid-lg-3.grid-xl-4
            .post(v-for="item in sortedPosts" :key="item.id").d-flex.flex-col.brd-primary.bg-black.p-2
              .txt.post__title.txt-primary.mb-1.fla {{ item.title }}
              .txt.fla.mb-a.txt-white {{ item.body }}
              .txt.txt-gray.mt-3 {{ item.name }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
import axios from "axios";
export default {
  name: "BlockArticles",
  components: {},
  props: {},
  data: () => ({
    postsFilter: "",
    postsAmount: 8,
    posts: []
  }),
  created() {},
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const dataSetup = this.postsAmount;
      let m = new Map();
      const dataAllUsers = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${dataSetup}`).then(data => {
        data.data.forEach(function (x) {
          m.set(x.id, x);
        })
      })
      const dataAllPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${dataSetup}`).then(data => {
        data.data.forEach(function (x) {
          let existing = m.get(x.id);
          Object.assign(existing, x);
        })
      })
      this.posts = Array.from(m.values());
    },

  },
  computed: {
    sortedPosts(){
      return this.posts.filter(item => item.name.toLocaleLowerCase().includes(this.postsFilter.toLocaleLowerCase()))
    }
  }
};
</script>

<style lang="scss" scoped>
//Project Specific
.search-bar{
  &__input{
    max-width: 50%;
    margin: 2em auto;
    input{
      padding: 0.6em;
    }

  }
}
</style>
