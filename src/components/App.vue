<template>
  <div id="app">
    <div class="container">
      <button @click="initJokes" >fetch</button>
      <div class="notification">
        Hello World !
        {{$store.state}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  created () {
    // console.log(mapActions(['initJokes']))
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
