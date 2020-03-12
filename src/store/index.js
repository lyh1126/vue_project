import Vue from 'vue'
import Vuex from 'vuex'

import msite from './modules/msite'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    msite,
    user
  }
})

export default  store