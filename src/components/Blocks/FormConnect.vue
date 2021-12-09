<template lang="pug">
  #form2connect.form-options
    .form-options__container
      .form-options__title-container.bg-black.w-100.p-2.mb-3.r-10.brd-primary
          h3.form-options__title.txt.txt-white Подключится к нашим услугам
      .form-options__content.d-flex.flex-center.flex-col.w-100
        .stage-first(:class="optionsArray").w-100.p-5.r-10.o-hidden.stage.stage-white
          .stage-first__coloring.d-flex
            .coloring.coloring__internet
            .coloring.coloring__tv
            .coloring.coloring__video
          .txt-1.txt.txt-black Сперва выберите услуги:
          .stage-first__buttons.mt-4.d-flex
            button.btn.r-10.btn__internet.hover-back-fill(@click="switchOption('internet', $event)") Интернет
            button.btn.r-10.btn__tv.hover-back-fill(@click="switchOption('tv', $event)") Телевидение
            button.btn.r-10.btn__video.hover-back-fill(@click="switchOption('video', $event)") ВидеоНаблюдение
        transition(name="right")
          .stage-second(v-if="displayStepSecond").mt-4.w-100.p-5.r-10.stage.stage-black
            .stage-second__title
              .txt-1.txt.txt-white Теперь укажите свой адрес:
            .stage-second__container
              FormDefault


</template>

<script>
  // import XXX from "@/components/XXX.vue";
  import FormDefault from '../Elements/Form/FromDefault'
  export default {
    name: 'FormConnect',
    components: { FormDefault },
    props: {},
    data: () => ({
      optionsArray: [],
      displayStepSecond: false,

    }),
    created() {
    },
    mounted() {
    },
    methods: {
      switchOption: function (option, event) {
        this.addOption(option)
        event.target.classList.toggle('is-active')
        this.displayStepSecond = true
      },
      addOption(option) {
        if (this.optionsArray.indexOf(option) === -1) {
          this.optionsArray.push(option)
        } else {
          this.optionsArray.splice(this.optionsArray.indexOf(option), 1)
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  //Project Specific
  .form-options {
    margin-top: 6em;
    .stage{
      position: relative;
    }
    .stage-white{
      background-color: #d2d2d2;
    }
    .stage-black{
      background-color: #080808;
    }
    &__content {
      .stage-first {

        isolation: isolate;

        &.internet {
          .coloring__internet {
            height: 100%;
            width: 100%;
          }
        }

        &.tv {
          .coloring__tv {
            height: 100%;
            width: 100%;
          }
        }

        &.video {
          .coloring__video {
            height: 100%;
            width: 100%;
          }
        }

        &__coloring {
          position: absolute;
          z-index: -1;
          inset: 0;
          height: 100%;
          width: 100%;

          .coloring__internet {
            background-color: #bea761;
            transition: all 0.3s ease-in-out;
            height: 100%;
            width: 0;
          }

          .coloring__tv {
            background-color: #389fab;
            transition: all 0.3s ease-in-out;
            height: 100%;
            width: 0;
          }

          .coloring__video {
            background-color: #56ab54;
            transition: all 0.3s ease-in-out;
            height: 100%;
            width: 0;
          }
        }

        &__buttons {
          flex-direction: column;
          gap: 20px;
          @include breakpoint(md){
            flex-direction: row;
          }
          .btn {
            border: 2px solid black;
            background-color: #d2d2d2;
            &.is-active{
              background-color: $primary;
            }
          }
        }
      }
      .stage-second{
        border: 2px solid $primary;
      }
    }
  }
</style>
