import Vue from 'vue'
import App from './components/App'
import 'bulma/css/bulma.css'
import store from './store'

/* eslint-disable no-new */
// store.commit('INIT_JOKES', [1, 2, 3])

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  created () {
    console.log(this.$store)
  }
})
