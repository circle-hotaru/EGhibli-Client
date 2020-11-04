import Vue from 'vue'
import Vuex from 'vuex'
import Films from './modules/Films'
import Roles from './modules/Roles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Films,
    Roles
  },
})