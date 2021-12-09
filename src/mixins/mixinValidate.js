export const mixinValidate = {
    methods: {
      emailCheck(emailCheck){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(emailCheck + "= email is " + re.test(String(emailCheck).toLowerCase()))
        return re.test(String(emailCheck).toLowerCase());
      },
      phoneCheck(phoneCheck){
        const re = /^\d\d\d\d\d\d\d\d\d\d$/;
        console.log(phoneCheck + "= phone is" + re.test(String(phoneCheck)))
        return re.test(String(phoneCheck));
      },
      noemptyCheck(noemptyCheck){
        console.log(noemptyCheck + "= noempty is" + noemptyCheck !== '' && noemptyCheck !== null)
        return noemptyCheck !== '' && noemptyCheck !== null;
      }
    },
    mounted() {
    },
}
