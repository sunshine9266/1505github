import Vue from 'vue'
import App from './App.vue'
//这里是入口文件，

//引入重置样式表
import "./static/public.css"
//引入使用rem的淘宝框架
import "./static/flexible.js"


//搞进路由
import Router from "vue-router";
Vue.use(Router);



new Vue({
  el: '#app',
  
  render: h => h(App)
})
