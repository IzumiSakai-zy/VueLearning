import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'  //引入路由模块
import {route} from "./router";     //引入创建的静态路由表

Vue.use(VueAxios,axios)
Vue.use(VueRouter)  //使用路由模块

const router = new VueRouter({  //创建VueRouter对象
  route: route
})
new Vue({
  el: '#app',
  router, //把创建的router实例放在Vue当中
  render: h => h(App)
})
