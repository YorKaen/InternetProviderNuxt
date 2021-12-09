<template lang="pug">
  swiper.topSwiper(:options="swiperOption"  @swiper="onSwiper" @slideChange="onSlideChange" ).r-10
      swiper-slide.d-flex.r-10
          .slide.bg-black.d-flex
              .slide-wrapper.d-flex.flex-col.flex-center.fill
                  .slide-content.p-5.mt-a.d-flex.flex-col
                    h2.txt-white Новогодний Интернет!
                    .txt.txt-white Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis.
                    a(href="#").is-primary.btn.r-10.btn-primary.mt-2
                      .txt-white Узнать подробнее
                  bg-particle

      swiper-slide.d-flex.r-10
          .slide.bg-black
              .slide-wrapper.d-flex.flex-col.flex-center.fill
                .slide-content.p-5.mt-a.d-flex.flex-col
                  h2.txt-white Еще один слайдер!
                  .txt.txt-white Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis.
                  a(href="#").is-primary.btn.r-10.btn-primary.mt-2
                    .txt-white Узнать подробнее
                bg-particle

      swiper-slide.d-flex.r-10
          .slide.bg-black
              .slide-wrapper.d-flex.flex-col.flex-center.fill
                .slide-content.p-5.mt-a.d-flex.flex-col
                  h2.txt-white Третий слайдер!
                  .txt.txt-white Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio purus, finibus quis imperdiet quis.
                  a(href="#").is-primary.btn.r-10.btn-primary.mt-2
                    .txt-white Узнать подробнее
                bg-particle

</template>

<script>
//array через пропсы пока не передается, или с кучей ошибок, так что пока так(
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper.scss'
import BgParticle from '../../Blocks/bgParticle'

export default {
  name: "Swiper6",
  components: {
    BgParticle,
      Swiper,
      SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  data: () => ({
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true
      }
  }),
  created() {
  },
  mounted() {

  },
  methods: {
      onSwiper(swiper) {
          //console.log(swiper);
      },
      onSlideChange() {
          //console.log('slide change');
      },
  },
};
</script>

<style lang="scss" >
//Project Specific
.topSwiper{
  height: 100%;
}
.slide {
  //border: 3px solid $primary;
  flex: 1 0 100%;
  position: relative;

  .slide-wrapper{
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-radius: 10px;

  }
  .slide-content{
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .is-primary{
    &:hover{
      background-color: black;
    }

  }

}
.swiper-slide{

  &.swiper-slide-next, &.swiper-slide-prev{
    .particles-js{
      visibility: hidden;
    }

  }
  &.swiper-slide-active{
    .particles-js{
      visibility: visible;
    }
  }
}
</style>
