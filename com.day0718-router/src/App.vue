<template>
  <div id="app">
    <router-link to="/router/3">router</router-link>
    <button v-on:click="btn">点我跳转</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    btn: function () {
      this.$router.push("/router/2");
    }
  }
}


</script>

<style>
</style>
