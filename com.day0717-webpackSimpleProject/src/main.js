import Vue from 'vue'
import App from './App.vue'
import Header from './components/header'

//全局注册当标签用
Vue.component('MyHeader',Header)

new Vue({
  el: '#app',
  render: h => h(App)
})
