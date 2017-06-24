import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     jokers: []
//   }
// })

const store = new Vuex.Store({
  state: {
    jokes: []
  },
  mutations,
  actions,
  getters: {
    jokeList: (state) => state.jokes
  }
})

export default store
