<template>
  <div class="counter-warp">
    <p>Vuex counter：</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'

export default {
  data (){
     return {
        num:1
     }
  },
  computed: {
    count () {
      // return this.$store.state
     
    }
  },
  methods: {
    increment () {
      // this.$state.commit('increment')
      this.$store.commit('SET_TOKEN',"1211234")
    },
    decrement () {
      // this.$state.commit('decrement')
    }
  },
  created (){
    console.log(1)
    console.log(this.$store);
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
