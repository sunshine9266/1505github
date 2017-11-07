<template>
  <div id="index">
    	<headers></headers>
    	
    	<mains></mains>
  </div>
</template>

<script>
//组件的使用方式：首先1.import导入 2.在components中注册，3就能够在template模版中使用了
import header from "./index/header.vue";
import main from "./index/main.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	'headers':header,
  	'mains':main
  }
}
</script>

<style>

</style>
