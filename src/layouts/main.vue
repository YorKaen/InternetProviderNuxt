<template lang="pug">
  #app.app
    d-e-b-u-g
    nav.nav.fixed.bg-black.txt-white
      .level.container.pb-2.pt-2.bg-black
        .level-left
          .nav__wrapper
            .nav__list.d-flex
              .nav__list-item(v-for="(item, index) in navLinksArray" :key="item.id" :class="{ 'active-item': index === 0 }").mr-1.hover-underline-center
                a(:href="item.path" ).txt-white {{ item.name }}
        .level-right
          transition(name="mode-fade" mode="out-in" appear-active-class="fade-enter-active")
            .user(v-if="!isLoggedIn" :key="1").d-flex
              button.user__button.d-flex.btn(@click="logIn()" )
                exit-enter(isEnter="true" :width="'30'" :height="'30'" fill="#febf32")
                .ml-1.txt.hover-underline-center Войти
            .user.is-logged(v-else :key="2").d-flex.flex-row
              NuxtLink(:to="{ path: 'lk', query: { plan: 'private' }, }" )
                .txt.enter-lk.txt-white Личный кабинет
              button.user__button.d-flex.btn(@click="logOut()" )
                exit-enter(isExit="true"  :width="'30'" :height="'30'" fill="#febf32")
                .ml-1.txt.hover-underline-center Выйти
      .container.user-name
        transition(name="fade-top")
          .user-name__text.txt(v-if="isLoggedIn" v-cloak) {{ userId }}
    Nuxt
    .footer
    .copyright


</template>

<script>
  import DEBUG from '../components/Utilities/DEBUG'
  import ExitEnter from '../components/UI/Icons/Exit-Enter'
  import { mapMutations, mapActions } from 'vuex'

  const pageType = 'website'
  const pageTitle = 'Test App Title'
  const pageDescription =
    'Test App Description'
  export default {
    components: {
      ExitEnter,
      DEBUG
    },
    head: {
      title: pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: pageDescription
        },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        {
          hid: 'og:description',
          property: 'og:description',
          content: pageDescription
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: pageType
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: pageTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: pageDescription
        }
      ]
    },

    data: () => ({
      isLoggedIn: Boolean,
      userId: '',
      navLinksArray: [
        {
          path: '/',
          name: 'Главная'
        },
        {
          path: '#form2connect',
          name: 'Подключится'
        },
        {
          path: '#form2payment',
          name: 'Пополнить счет'
        },
        {
          path: '#tariffs',
          name: 'Тарифы'
        },
        {
          path: '#news',
          name: 'Новости'
        },
      ],
    }),
    computed: {},
    mounted() {
      if(this.$store.state.global.userId){
        this.setId()
      }
      else{
        this.$store.commit('global/generateID')
        this.setId()
      }
    },
    methods: {
      logIn(){
        this.isLoggedIn = true;
        this.$store.commit('local/setLoggedIn', this.isLoggedIn)
      },
      logOut(){
        this.isLoggedIn = false;
        this.$store.commit('local/setLoggedIn', this.isLoggedIn)
      },
      setId(){
        this.userId = this.$store.state.global.userId;
      },
    }
  }
</script>

<style lang="scss" >
  [v-cloak] {
    display: none;
  }
  .brd-primary{
    border: 2px solid $primary;
  }
  .app{
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='30' height='30' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(157)'%3E%3Crect width='100%25' height='100%25' fill='rgba(26, 32, 44,1)'/%3E%3Ccircle cx='40' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='0' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='2.857142857142857' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='5.714285714285714' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='8.571428571428571' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='11.428571428571429' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='14.285714285714286' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='17.142857142857142' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='20' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='22.857142857142858' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='25.714285714285715' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='28.571428571428573' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='31.42857142857143' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='34.285714285714285' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='37.142857142857146' cy='20' r='2.5' fill='%231a202c'/%3E%3Ccircle cx='0' cy='20' r='2' fill='%23ecc94b'/%3E%3Ccircle cx='40' cy='20' r='2' fill='%23ecc94b'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
  }
  .nav{
    border-bottom: 2px solid $primary ;
    box-shadow: 0px 10px 5px -1px rgba(0,0,0,0.75);
    position: relative;
    z-index: 3;
    &__wrapper{


    }
    .level{
      position: relative;
      z-index: 3;
      //isolation: isolate;
    }
    &__list{
      flex-wrap: wrap;
      margin-bottom: 2em;
      @include breakpoint(md){
        margin-bottom:0;
      }
      &-item{

      }

    }
  }
  .user {
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    @include breakpoint(lg){
      flex-direction: row;
      align-items: center;
    }
  }
  .user-name{
    position: relative;
    z-index: 2;
  }
  .user-name__text{
    position: absolute;
    z-index: 1;
    bottom: -4em;
    right: 0;
    background-color: white;
    color: black;
    padding: 1em;
    border-bottom: 4px solid $primary;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

  }
</style>
