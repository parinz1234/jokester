<template>
  <div id="app">
    <div class="container">
      <button class="button is-primary" @click="initJokes" >fetch</button>
      <div class="notification">
        Hello World !
        {{jokeList}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  methods: {
  //   /* mapActions(['initJokes'])  mapActions is object of function */
  //   // solution 1
    ...mapActions(['initJokes'])
  },
  // solution 2
  // methods: Object.assign({}, mapActions(['initJokes']), {toggle () { alert('555') }})
  // methods: mapActions(['initJokes']),

  // without mapActions
  // methods: {
  //   initJokes () {
  //     this.$store.dispatch('initJokes')
  //   }
  // },
  computed: {
    // without mapGetters
    // jokeList () {
    //   return this.$store.getters.jokeList
    // }
    ...mapGetters(['jokeList'])
  },

  created () {
    console.log(this.$store)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
