import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import taxser from './taxser'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    user,
    taxser
  },
  strict: true
})
export default store
