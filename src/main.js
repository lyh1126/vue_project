import Vue from 'vue'
import App from './App.vue'
//移动端的适配
import './utils/rem'
import router from './router'
import Swiper from './components/swiper/Swiper.vue'
import store from './store'
import './mock/mock.js'
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';
import './vee-validate.js'

Vue.component(Field.name, Field);

Vue.component(Button.name, Button);

Vue.component(Swiper.name,Swiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
