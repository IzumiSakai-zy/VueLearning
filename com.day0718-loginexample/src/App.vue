<template>
  <div id="app">
<!--    <form>-->
<!--      用户名:<input type="text" name="username" v-model="username">-->
<!--      密码: <input type="password" name="password" v-model="password">-->
<!--      <input type="submit" value="提交">-->
<!--    </form>-->
<!--    <br>-->
<!--    <button @click="changejoke">切换笑话</button> {{joketest}}-->
    <router-link to="/homoe">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'IzumiSaki',
      password: '',
      joketest: ''
    }
  },
  methods: {
    changejoke: function () {
      this.axios({
        method: 'get',
        url: 'https://autumnfish.cn/api/joke'
      }).then(respongse=>{this.joketest=respongse.data})
    }
  }
}
</script>

<style>
</style>
