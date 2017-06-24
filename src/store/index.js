import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
// import * as action from './actions' // from each export
import actions from './actions' // from export default
import getters from './getters'
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
  // getters: {
  //   jokeList: (state) => state.jokes
  // }
  getters
})

export default store
