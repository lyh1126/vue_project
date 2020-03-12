//表单验证
import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN.js'

Vue.use(VeeValidate);

//提示语汉化
Validator.locale ==="en" ? "zh_CN" : "en";
Validator.localize(Validator.locale,{
    messages: zh_CN.messages,
    attributes:{
      phone:'电话号码',
      msg:'验证码'
    }
});
