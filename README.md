# VueLeanring

**************

学习Vue

### 前端四要素

* 逻辑
  * 循环、判断
* 事件
  * 浏览器事件——window、document
  * DOM事件——增、删、修改节点内容、遍历查询节点
  * 事件框架——jQuery
* 视图
  * html, css
* 通信
  * 通信框架——xhr, ajax

******************

### Vue概述

* 构建用户界面的渐进式框架，被设计为自顶向上的逐层应用

*****************

### HelloWorld

* 代码

  * `src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"`是引入vue的资源，就用这个地址，其他容易挂
    * 而且不能用 "/>"简写方式，这种方式也要挂
  * 定义一个Vue对象var app = new Vue
    * el是元素的意思，根据id选择器选择元素
    * data是数据，用键值对存储
  * {{}}是引用js里的数据

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>HelloWorld</title>
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script>
          window.onload=function(){
              var app = new Vue({
                  el: '#test',
                  data: {
                      message: 'Hello Vue!'
                  }
              })
          };
      </script>
  </head>
  <body>
      <div id="test">
          {{ message }}
      </div>
  </body>
  </html>
  ```

* 三层关系

  * view——就是带{{}}的部分
  * model——就是Vue对象部分
  * view-model——按F12输入代码双向绑定，双向变化

**************

### 语法

* if判断

  * `v-if="ok"`，`v-else`，`v-else-if`表示判断，其中OK是Vue对象中的一个布尔属性值

  ```HTML
  <div id="app-4" v-if="ok">
      {{message}}
  </div>
  ```

  ```javascript
  data: {
      ok:true,
      message: "ok为true才显示"
  }
  ```

* for判断

  * `v-for="todo in todos"`

  ```HTML
  <div id="app-4">
      <ol>
          <li v-for="todo in todos">
              {{ todo.text }}
          </li>
      </ol>
  </div>
  ```

  ```javascript
  data: {
      todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
      ]
  }
  ```

* 事件

  * "v-on:"可以替换成"@"；"v-on:keyup.enter"

  ```HTML
  <button v-on:click="showAlert()">heoo</button>
  ```

  ```javascript
  methods: {
    showAlert: function () {
          alert(this.message);
    }
  }
  ```

* 双向绑定

  * v-model会忽略所有的value，checked，selected属性而是只将vue作为数据源

  ```HTML
  <body>
      <div id="test">
          <input type="text" v-model="message">{{message}}
      </div>
  </body>
  <script>
      window.onload=function () {
          var vm=new Vue({
              el: "#test",
              data: {
                  message: ""
              }
          })
      }
  </script>
  ```

* v-text指令，和th:text指令是一样的

  ```javascript
  v-text="message+'其他单引号补充内容'"
  ```

* v-html指令，和th:html是一样的

* v-show指令，传一个布尔值，true就显示

* v-blnd指令，设置属性。且v-bind可以省略

  ```javascript
  v-bind:src="isChange?'./imag/test.png':''"
  ```

******************************

## axios

### HelloWorld

* 导入依赖`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

* sript代码

  ```JavaScript
  <script>
      var operation1=new Vue({
          el:"#test",
          data:{
              content:""
          },
          methods: {
              buttonClick: function () {
                  // https://autumnfish.cn/api/joke
                  // http://localhost:10001//algorithm/3
                  axios.get('https://autumnfish.cn/api/joke')
                      .then(response=>{console.log(response);this.content=response.data})
                      .catch(error=>{console.log(error)});
              }
          }
      })
  </script>
  ```

* 必须要用{{content}}而不能用v-text