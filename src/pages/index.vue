<template lang="pug">
.index.mt-5
  section-basic(:src-name="'top-section'")
    template(v-slot:content)
      .top-section__wrapper.wrapper.d-flex.flex-col.d-grid-lg.mt-5
        .slider.slider-container
          Swiper6
        .ad-blocks.ad-blocks-container
          ad-block(v-for="item in adblockArray" :adblock="item" :key="item.id")
  section-basic(:src-name="'form-to-connect'")
    template(v-slot:content)
      FormConnect
  section-basic(:src-name="'form-to-payment'")
    template(v-slot:content)
      .form-payment
  section-basic(:src-name="'tariffs'")
    //- выбрать интернет или тв или оба варианта и отображать тарифы и внизу кнопка подключить с переходом в лк
    template(v-slot:content)
      .tariffs
  section-basic(:src-name="'articles'")
    //-добавить загрузку новостей из компонента с тестового
    template(v-slot:content)
      .articles.mt-5
        .articles__title-container.bg-black.w-100.p-2.mb-3.r-10.brd-primary
          h3.form-options__title.txt.txt-white Последние статьи
        BlockArticles
  section-basic(:src-name="'subscribe'")
    //- подписаться на сервисы
    template(v-slot:content)


</template>

<script>
import SectionBasic from '../components/Sections/SectionBasic'
import Swiper6 from '../components/Elements/Swiper/SwiperFade'
import AdBlock from '../components/Blocks/AdBlock'
import FormConnect from '../components/Blocks/FormConnect'
import BlockNews from '../components/Blocks/BlockArticles'
import BlockArticles from '../components/Blocks/BlockArticles'
export default {
  name: 'Index',
  layout: 'main',
  components: { BlockArticles,  FormConnect, AdBlock, Swiper6, SectionBasic },
  props: {},
  data: () => ({
    adblockArray:[
      {
        name: "internet",
        title: "Домашний интернет",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis. ",
        link: '#',
        linkName: 'Перейти',
      },
      {
        name: "tv",
        title: "Кабельное ТВ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis. ",
        link: '#',
        linkName: 'Перейти',
      },
      {
        name: "video",
        title: "ВидеоНаблюдение",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis. ",
        link: '#',
        linkName: 'Перейти',
      },
    ]
  }),
  created() {},
  computed: {},
  mounted() {},
  beforeMount() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mymixins.scss";
.top-section{
  &__wrapper{
    grid-template-columns: calc(70% - 3em) 30%;
    grid-template-rows: 1fr;
    gap: 3em;
  }
  .slider{
    height: 100%;
  }
}

</style>
