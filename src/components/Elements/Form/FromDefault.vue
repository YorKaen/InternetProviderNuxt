<template lang="pug">
.forms-container.container
    form.form.d-flex.flex-col.flex-row-lg.gap-30(@submit.prevent="check()" v-if="showNext").flex-wrap
        .row.w-100.d-flex.gap-20.flex-between.mt-2
            .form-item(:class="{'is-invalid': !valid.firstname}")
                input(type="text" required v-model="form.firstname" @change="validate()" autocomplete="off")#inputName.form-input
                label#labelName.form-label.txt-white Имя*
                .form-line
                .form-error.txt-danger Поле не должно быть пустым
            .form-item(:class="{'is-invalid': !valid.email}")
                input(type="text" required  v-model="form.email" @change="validate()" autocomplete="off")#inputEmail.form-input
                label#labelEmail.form-label.txt-white E-mail*
                .form-line
                .form-error.txt-danger Неверный E-mail
            .form-item(:class="{'is-invalid': !valid.phone}")
                the-mask(type="tel" required mask="+7 (###) ###-##-##" v-model="form.phone" @change="validate()" autocomplete="off")#inputNumber.form-input
                label#labelNumber.form-label.txt-white Номер телефона*
                .form-line
                .form-error.txt-danger Неверный номер
        .row.w-100.d-flex.gap-20.flex-between.mt-2
            .form-item(:class="{'is-invalid': !valid.adress}").fl-65
                input(type="text" required v-model="form.adress" @change="validate()" autocomplete="off")#inputAdress.form-input
                label#labelAdress.form-label.txt-white Адрес*
                .form-line
                .form-error.txt-danger Поле не должно быть пустым
            .form-item
                button.btn.bg-white.r-5(type="submit").hover-back-fill
                    .txt.txt-black.fw-m {{btnText}}

    .form-approval(v-else)
        .form-popup.r-10.bg-white.mr-a.ml-a.mt-4
            .row
                .form-popup__logo
            .row
                .form-popup__title
                    h2.txt {{afterTitle}}
                .form-popup__subtitle
                    .txt.txt-1 Спасибо, что выбрали нас. В ближайшее время мы с вами свяжемся.
</template>

<script>
// import XXX from "@/components/XXX.vue";
//import * as Validate from "./validators.js";
import ImageLazy from "../../UI/Images/ImageLazy";
import { mixinValidate } from '../../../mixins/mixinValidate'
import {TheMask} from 'vue-the-mask'

export default {
  name: "FormDefault",
  components: { ImageLazy,TheMask },
  mixins: [mixinValidate],
  props: { btnText: {type: String, default: 'Заказать'}, afterTitle: {type: String, default: 'Заявка успешно отправлена!'} },
  data: () => ({
    isNextClicked: false,
    showNext: true,
    form: {
      phone: null,
      email: null,
      firstname: null,
      adress: null
    },
    valid: {
      phone: true,
      email: true,
      firstname: true,
      adress: true
    },
  }),
  created() {},
  mounted() {},
  methods: {
    check() {
      this.isNextClicked = true;
      if (this.validate()) {
        this.form.phone = '+7' + this.form.phone
      }
    },
    validate() {
      if (this.isNextClicked === false) {
        return true;
      }
      this.valid.phone = this.noemptyCheck(this.form.phone);
      this.valid.email = this.emailCheck(this.form.email);
      this.valid.firstname = this.noemptyCheck(this.form.firstname);
      this.valid.adress = this.noemptyCheck(this.form.adress);
      for (const field in this.valid) {
        if (this.valid[field] === false) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.btn {
  .txt-color-defam {
    color: #3b7b3a;
  }
}
.form {
  display: flex;
  flex-direction: column;
  height: 300px;
  align-content: space-between;
  position: relative;
  z-index: 3000;
  @include breakpoint(lg) {
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: auto;
    margin-top: 40px;
  }
  .row{
    flex-direction: column;@include breakpoint(md){flex-direction: row}
  }
  .fl-100{
    flex: 1 0 100%;
    max-width: 100%;
  }
  .fl-50{
    flex: 1 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
  .fl-65{
    flex: 1 0 calc(65% - 20px);
    max-width: calc(65% - 20px);
  }
  &.is-valid {
  }

  &-item {
    position: relative;
    width: 100%;
    margin: auto 0;
    @include breakpoint(lg) {
      max-width: 25%;
    }
    @include breakpoint(xxl) {
      max-width: 325px;
    }
    &.is-invalid {
      .form-line {
        border: 1px solid #f31919;
      }
      .form-error {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
      }
    }
    input {
      width: 100%;
      padding: 0 5px;
      border: none;
      //font-size: 20px;
      //font-weight: bold;
      outline: 0;
      background: transparent;
      box-shadow: none;
      color: white;
    }
    label {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      //font-size: 20px;
      //font-weight: bold;
      padding: 0 5px;
      transition: 0.2s ease-in-out;
    }
    & input:valid + label {
      top: -15px;
      font-size: 11px;
      font-weight: normal;
    }
    .form-input {
    }
    .form-label {
    }
    .form-error {
      display: none;
    }
    .form-line {
      width: 100%;
      border: 1px solid white;
      opacity: 0.5;
    }
  }
}
//////////////////////////
.form-popup {
  width: 100%;
  height: 100%;
  padding: 30px 37px;
  place-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  @include breakpoint(md) {
    max-width: 670px;
    max-height: 460px;
  }

  .form-popup__logo {
    margin: 14px auto 16px;
  }

  .form-popup__title {
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
  }

  .form-popup__subtitle {
    max-width: 245px;
    margin: 0 auto;
    @include breakpoint(md) {
      max-width: 400px;
    }
  }

  .form-popup__close {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 999;
    cursor: pointer;
    right: 0;
    margin-left: auto;

    &:after,
    &:before {
      position: absolute;
      background-color: #9c9c9c;
      height: 3px;
      content: "";
      right: 0;
      width: 30px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
