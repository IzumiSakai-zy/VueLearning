<template>
  <div id="app">
    <MyHeader></MyHeader>
    fajgkljsl
    <MyFooter></MyFooter>
    <Pros :parameter="parameterValue" @key="msg=$event"></Pros>
    {{msg}}
  </div>
</template>

<script>
  import Footer from "./components/footer"
  import Pros from './components/pros'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parameterValue: "父亲的参数值"
    }
  },
  components: {
    "MyFooter": Footer,
    "Pros": Pros
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
