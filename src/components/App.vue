<template>
    <div id="app">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h1 class="">Got jokes ?</h1>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <button class="button is-primary" @click="initJokes" >Add Ten Random Jokes</button>
                </div>
                <div class="column">
                    <button class="button is-primary" @click="addJoke" >Add One Random Jokes</button>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="column">
                        <span v-for="t in types">
                              <input type="checkbox"
                                  :value="t"
                                  v-model="checkedTypes"
                              >
                              <label>{{t}}</label>
                              &nbsp;
                        </span>
                    </div>
                </div>
            </div>
            <Joke v-for="(joke, index) in jokeList"
                  v-show="checkedTypes.includes(joke.type)"
                  :joke="joke" 
                  :key="index"
                  :index="index"
                  />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Joke from './Joke'
export default {
  name: 'app',
  data: () => ({
    types: ['general', 'knock-knock', 'programming'],
    checkedTypes: ['general', 'knock-knock', 'programming']
  }),
  methods: {
  //   /* mapActions(['initJokes'])  mapActions is object of function */
  //   // solution 1
    ...mapActions(['initJokes', 'addJoke'])
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
  components: {
    Joke
  },
  watch: {
    checkedTypes () {
      console.log(this.checkedTypes)
    }
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
