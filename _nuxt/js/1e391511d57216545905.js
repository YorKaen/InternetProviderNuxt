(window.webpackJsonp=window.webpackJsonp||[]).push([[7,13,25],{492:function(t,e,o){var content=o(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("6e101787",content,!0,{sourceMap:!1})},494:function(t,e,o){var content=o(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("bfd2fa3c",content,!0,{sourceMap:!1})},495:function(t,e,o){"use strict";o(492)},496:function(t,e,o){var n=o(71)(!1);n.push([t.i,"",""]),t.exports=n},497:function(t,e,o){"use strict";o.r(e);var n={name:"ImageLazy",components:{},props:{srcImg:String,altImg:{type:String,default:"Декоративный элемент"}},data:function(){return{}},methods:{}},r=(o(495),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-picture",{attrs:{src:"/img/"+t.srcImg,format:"webp"}})}),[],!1,null,"2aeb10fc",null);e.default=component.exports},502:function(t,e,o){t.exports=function(t){function e(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,o){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=o(2),r=o(0),i=o.n(r);e.a=function(t,e){var r=e.value;if((Array.isArray(r)||"string"==typeof r)&&(r={mask:r,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=o.i(a.a)(t.value,r.mask,!0,r.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(n("input"))}};var s=o.i(a.a)(t.value,r.mask,!0,r.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(n("input")))}},function(t,e,o){"use strict";var n=o(6),a=o(5);e.a=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?o.i(a.a)(n.a,e,i)(t,e,r,i):o.i(n.a)(t,e,r,i)}},function(t,e,o){"use strict";function n(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(0),r=o.n(a),i=o(1),u=o(7),s=o.n(u);o.d(e,"TheMask",(function(){return s.a})),o.d(e,"mask",(function(){return i.a})),o.d(e,"tokens",(function(){return r.a})),o.d(e,"version",(function(){return l}));var l="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=o(0),r=o.n(a),i=o(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return r.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=o.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,o){"use strict";function n(t,e,o){return e=e.sort((function(t,e){return t.length-e.length})),function(n,a){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(n,s,!0,o).length>u.length))return t(n,u,r,o)}return""}}e.a=n},function(t,e,o){"use strict";function n(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var a=0,r=0,i="";a<e.length&&r<t.length;){var s=n[u=e[a]],l=t[r];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),r++):(s&&s.escape&&(u=e[++a]),o&&(i+=u),l===u&&r++,a++)}for(var c="";a<e.length&&o;){var u;if(n[u=e[a]]){c="";break}c+=u,a++}return i+c}e.a=n},function(t,e,o){var n=o(8)(o(4),o(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,o,n){var a,r=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,r=t.default);var u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),o&&(u._scopeId=o),n){var s=u.computed||(u.computed={});Object.keys(n).forEach((function(t){var e=n[t];s[t]=function(){return e}}))}return{esModule:a,exports:r,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,o){t.exports=o(3)}])},503:function(t,e,o){"use strict";o(494)},504:function(t,e,o){var n=o(71)(!1);n.push([t.i,'.btn .txt-color-defam[data-v-01df13c8]{color:#3b7b3a}.form[data-v-01df13c8]{display:flex;flex-direction:column;height:300px;align-content:space-between;position:relative;z-index:3000}@media(min-width:991.98px){.form[data-v-01df13c8]{flex-direction:row;justify-content:space-between;align-content:center;height:auto;margin-top:40px}}.form .row[data-v-01df13c8]{flex-direction:column}@media(min-width:767.98px){.form .row[data-v-01df13c8]{flex-direction:row}}.form .fl-100[data-v-01df13c8]{flex:1 0 100%;max-width:100%}.form .fl-50[data-v-01df13c8]{flex:1 0 calc(50% - 20px);max-width:calc(50% - 20px)}.form .fl-65[data-v-01df13c8]{flex:1 0 calc(65% - 20px);max-width:calc(65% - 20px)}.form-item[data-v-01df13c8]{position:relative;width:100%;margin:auto 0}@media(min-width:991.98px){.form-item[data-v-01df13c8]{max-width:25%}}@media(min-width:1400px){.form-item[data-v-01df13c8]{max-width:325px}}.form-item.is-invalid .form-line[data-v-01df13c8]{border:1px solid #f31919}.form-item.is-invalid .form-error[data-v-01df13c8]{position:absolute;display:flex;flex-wrap:wrap}.form-item input[data-v-01df13c8]{width:100%;padding:0 5px;border:none;outline:0;background:transparent;box-shadow:none;color:#fff}.form-item label[data-v-01df13c8]{position:absolute;pointer-events:none;top:0;left:0;padding:0 5px;transition:.2s ease-in-out}.form-item input:valid+label[data-v-01df13c8]{top:-15px;font-size:11px;font-weight:400}.form-item .form-error[data-v-01df13c8]{display:none}.form-item .form-line[data-v-01df13c8]{width:100%;border:1px solid #fff;opacity:.5}.form-popup[data-v-01df13c8]{width:100%;height:100%;padding:30px 37px;align-content:center;justify-content:center;place-content:center;flex-direction:column;text-align:center;display:flex}@media(min-width:767.98px){.form-popup[data-v-01df13c8]{max-width:670px;max-height:460px}}.form-popup .form-popup__logo[data-v-01df13c8]{margin:14px auto 16px}.form-popup .form-popup__title[data-v-01df13c8]{margin-bottom:16px;text-align:center;width:100%}.form-popup .form-popup__subtitle[data-v-01df13c8]{max-width:245px;margin:0 auto}@media(min-width:767.98px){.form-popup .form-popup__subtitle[data-v-01df13c8]{max-width:400px}}.form-popup .form-popup__close[data-v-01df13c8]{width:24px;height:24px;position:relative;z-index:999;cursor:pointer;right:0;margin-left:auto}.form-popup .form-popup__close[data-v-01df13c8]:after,.form-popup .form-popup__close[data-v-01df13c8]:before{position:absolute;background-color:#9c9c9c;height:3px;content:"";right:0;width:30px}.form-popup .form-popup__close[data-v-01df13c8]:before{transform:rotate(45deg)}.form-popup .form-popup__close[data-v-01df13c8]:after{transform:rotate(-45deg)}',""]),t.exports=n},505:function(t,e,o){var content=o(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("c9a867ae",content,!0,{sourceMap:!1})},510:function(t,e,o){"use strict";o.r(e);var n=o(497),r={methods:{emailCheck:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return console.log(t+"= email is "+e.test(String(t).toLowerCase())),e.test(String(t).toLowerCase())},phoneCheck:function(t){var e=/^\d\d\d\d\d\d\d\d\d\d$/;return console.log(t+"= phone is"+e.test(String(t))),e.test(String(t))},noemptyCheck:function(t){return console.log(t+"= noempty is"+t!=""&&null!==t),""!==t&&null!==t}},mounted:function(){}},l=o(502),c={name:"FormDefault",components:{ImageLazy:n.default,TheMask:l.TheMask},mixins:[r],props:{btnText:{type:String,default:"Заказать"},afterTitle:{type:String,default:"Заявка успешно отправлена!"}},data:function(){return{isNextClicked:!1,showNext:!0,form:{phone:null,email:null,firstname:null,adress:null},valid:{phone:!0,email:!0,firstname:!0,adress:!0}}},created:function(){},mounted:function(){},methods:{check:function(){this.isNextClicked=!0,this.validate()&&(this.form.phone="+7"+this.form.phone)},validate:function(){if(!1===this.isNextClicked)return!0;for(var t in this.valid.phone=this.noemptyCheck(this.form.phone),this.valid.email=this.emailCheck(this.form.email),this.valid.firstname=this.noemptyCheck(this.form.firstname),this.valid.adress=this.noemptyCheck(this.form.adress),this.valid)if(!1===this.valid[t])return!1;return!0}}},d=(o(503),o(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"forms-container container"},[t.showNext?o("form",{staticClass:"form d-flex flex-col flex-row-lg gap-30 flex-wrap",on:{submit:function(e){return e.preventDefault(),t.check()}}},[o("div",{staticClass:"row w-100 d-flex gap-20 flex-between mt-2"},[o("div",{staticClass:"form-item",class:{"is-invalid":!t.valid.firstname}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],staticClass:"form-input",attrs:{type:"text",required:"",autocomplete:"off",id:"inputName"},domProps:{value:t.form.firstname},on:{change:function(e){return t.validate()},input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}}),o("label",{staticClass:"form-label txt-white",attrs:{id:"labelName"}},[t._v("Имя*")]),o("div",{staticClass:"form-line"}),o("div",{staticClass:"form-error txt-danger"},[t._v("Поле не должно быть пустым")])]),o("div",{staticClass:"form-item",class:{"is-invalid":!t.valid.email}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input",attrs:{type:"text",required:"",autocomplete:"off",id:"inputEmail"},domProps:{value:t.form.email},on:{change:function(e){return t.validate()},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),o("label",{staticClass:"form-label txt-white",attrs:{id:"labelEmail"}},[t._v("E-mail*")]),o("div",{staticClass:"form-line"}),o("div",{staticClass:"form-error txt-danger"},[t._v("Неверный E-mail")])]),o("div",{staticClass:"form-item",class:{"is-invalid":!t.valid.phone}},[o("the-mask",{staticClass:"form-input",attrs:{type:"tel",required:"",mask:"+7 (###) ###-##-##",autocomplete:"off",id:"inputNumber"},on:{change:function(e){return t.validate()}},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),o("label",{staticClass:"form-label txt-white",attrs:{id:"labelNumber"}},[t._v("Номер телефона*")]),o("div",{staticClass:"form-line"}),o("div",{staticClass:"form-error txt-danger"},[t._v("Неверный номер")])],1)]),o("div",{staticClass:"row w-100 d-flex gap-20 flex-between mt-2"},[o("div",{staticClass:"form-item fl-65",class:{"is-invalid":!t.valid.adress}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adress,expression:"form.adress"}],staticClass:"form-input",attrs:{type:"text",required:"",autocomplete:"off",id:"inputAdress"},domProps:{value:t.form.adress},on:{change:function(e){return t.validate()},input:function(e){e.target.composing||t.$set(t.form,"adress",e.target.value)}}}),o("label",{staticClass:"form-label txt-white",attrs:{id:"labelAdress"}},[t._v("Адрес*")]),o("div",{staticClass:"form-line"}),o("div",{staticClass:"form-error txt-danger"},[t._v("Поле не должно быть пустым")])]),o("div",{staticClass:"form-item"},[o("button",{staticClass:"btn bg-white r-5 hover-back-fill",attrs:{type:"submit"}},[o("div",{staticClass:"txt txt-black fw-m"},[t._v(t._s(t.btnText))])])])])]):o("div",{staticClass:"form-approval"},[o("div",{staticClass:"form-popup r-10 bg-white mr-a ml-a mt-4"},[t._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"form-popup__title"},[o("h2",{staticClass:"txt"},[t._v(t._s(t.afterTitle))])]),t._m(1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"form-popup__logo"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-popup__subtitle"},[o("div",{staticClass:"txt txt-1"},[t._v("Спасибо, что выбрали нас. В ближайшее время мы с вами свяжемся.")])])}],!1,null,"01df13c8",null);e.default=component.exports},516:function(t,e,o){"use strict";o(505)},517:function(t,e,o){var n=o(71)(!1);n.push([t.i,".form-options[data-v-753a5db1]{margin-top:6em}.form-options .stage[data-v-753a5db1]{position:relative}.form-options .stage-white[data-v-753a5db1]{background-color:#d2d2d2}.form-options .stage-black[data-v-753a5db1]{background-color:#080808}.form-options__content .stage-first[data-v-753a5db1]{isolation:isolate}.form-options__content .stage-first.internet .coloring__internet[data-v-753a5db1],.form-options__content .stage-first.tv .coloring__tv[data-v-753a5db1],.form-options__content .stage-first.video .coloring__video[data-v-753a5db1]{height:100%;width:100%}.form-options__content .stage-first__coloring[data-v-753a5db1]{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;height:100%;width:100%}.form-options__content .stage-first__coloring .coloring__internet[data-v-753a5db1]{background-color:#bea761;transition:all .3s ease-in-out;height:100%;width:0}.form-options__content .stage-first__coloring .coloring__tv[data-v-753a5db1]{background-color:#389fab;transition:all .3s ease-in-out;height:100%;width:0}.form-options__content .stage-first__coloring .coloring__video[data-v-753a5db1]{background-color:#56ab54;transition:all .3s ease-in-out;height:100%;width:0}.form-options__content .stage-first__buttons[data-v-753a5db1]{flex-direction:column;grid-gap:20px;gap:20px}@media(min-width:767.98px){.form-options__content .stage-first__buttons[data-v-753a5db1]{flex-direction:row}}.form-options__content .stage-first__buttons .btn[data-v-753a5db1]{border:2px solid #000;background-color:#d2d2d2}.form-options__content .stage-first__buttons .btn.is-active[data-v-753a5db1]{background-color:#de7b25}.form-options__content .stage-second[data-v-753a5db1]{border:2px solid #de7b25}",""]),t.exports=n},574:function(t,e,o){"use strict";o.r(e);o(312);var n={name:"FormConnect",components:{FormDefault:o(510).default},props:{},data:function(){return{optionsArray:[],displayStepSecond:!1}},created:function(){},mounted:function(){},methods:{switchOption:function(option,t){this.addOption(option),t.target.classList.toggle("is-active"),this.displayStepSecond=!0},addOption:function(option){-1===this.optionsArray.indexOf(option)?this.optionsArray.push(option):this.optionsArray.splice(this.optionsArray.indexOf(option),1)}}},r=(o(516),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-options",attrs:{id:"form2connect"}},[o("div",{staticClass:"form-options__container"},[t._m(0),o("div",{staticClass:"form-options__content d-flex flex-center flex-col w-100"},[o("div",{staticClass:"stage-first w-100 p-5 r-10 o-hidden stage stage-white",class:t.optionsArray},[t._m(1),o("div",{staticClass:"txt-1 txt txt-black"},[t._v("Сперва выберите услуги:")]),o("div",{staticClass:"stage-first__buttons mt-4 d-flex"},[o("button",{staticClass:"btn r-10 btn__internet hover-back-fill",on:{click:function(e){return t.switchOption("internet",e)}}},[t._v("Интернет")]),o("button",{staticClass:"btn r-10 btn__tv hover-back-fill",on:{click:function(e){return t.switchOption("tv",e)}}},[t._v("Телевидение")]),o("button",{staticClass:"btn r-10 btn__video hover-back-fill",on:{click:function(e){return t.switchOption("video",e)}}},[t._v("ВидеоНаблюдение")])])]),o("transition",{attrs:{name:"right"}},[t.displayStepSecond?o("div",{staticClass:"stage-second mt-4 w-100 p-5 r-10 stage stage-black"},[o("div",{staticClass:"stage-second__title"},[o("div",{staticClass:"txt-1 txt txt-white"},[t._v("Теперь укажите свой адрес:")])]),o("div",{staticClass:"stage-second__container"},[o("FormDefault")],1)]):t._e()])],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-options__title-container bg-black w-100 p-2 mb-3 r-10 brd-primary"},[o("h3",{staticClass:"form-options__title txt txt-white"},[t._v("Подключится к нашим услугам")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stage-first__coloring d-flex"},[e("div",{staticClass:"coloring coloring__internet"}),e("div",{staticClass:"coloring coloring__tv"}),e("div",{staticClass:"coloring coloring__video"})])}],!1,null,"753a5db1",null);e.default=component.exports}}]);