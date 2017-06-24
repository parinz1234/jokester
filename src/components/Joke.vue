<template>
  <div class="columns is-mobile">
    <div class="column">
      <div class="notification box joke-box">
          <button @click="removeJoke(index)" class="delete"></button>
          <p class="title">{{joke.setup}}</p>
          <p>{{joke.punchline}}</p>
          <p>{{`Type: ${joke.type}`}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['joke', 'index'],
    methods: {
      ...mapActions(['removeJoke'])
    }
  }
</script>

<style scoped lang="scss">
  .joke-box {
    .title {
      text-decoration: underline;
    }
  }
</style>
