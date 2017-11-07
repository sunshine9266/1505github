<template>
  <div id="main">
    <ul  class="left">
    	<li v-for="(ele,index) in leftArr">{{ele.name}}</li>
    </ul>
    <ul class="right">
    	<li><img src="../../assets/logo.png"/><h3>美食</h3><span>大众点评</span></li>
    	<li>第二列</li>
    </ul>
  </div>
</template>

<script>
//导入请求ajax的axios插件
import axios from "axios";
export default {
  name: 'main',
  data () {
    return {
    	//左侧数据的空数组变量
      leftArr:[]
    }
  },
  //created(){} == created:function(){}
  created(){
  	// "./src/static/data.json"此路径不能直接从此组件来寻找，要以index.html寻找
//	var _this = this；存一下this或者用箭头函数
  	axios.get("../src/static/data.json").then((data)=>{
//		console.log(data);
  		this.leftArr=data.data;
  	})
  }
}
</script>

<style scoped="scoped">
	/*scoped="scoped"作用是只在本组件中使用*/
	#main{
		background: #f6f6f6;		
		display: flex;
	}
	#main .left li{
		height: 1.777777rem;
		width: 2.444444rem;
		color:#454545;
		font-size: 0.555555rem;
		text-align: center;
		background: #FFFFFF;
		line-height: 1.777777rem;
		border-right: 1px solid #A8A8A8;
		border-bottom: 1px solid #A8A8A8;
	}
	#main .right{
		flex-grow: 1;
	}
	
	.right li{
		display: flex;
		height: 1.777777rem;
		border-bottom: 1px solid #dbdbdb;
		align-items: center;	
	} 
	
	.right li img{
		margin:0  0.155185rem 0 0.5rem;
		width: 1.444444rem;
		height: 1.444444rem;
	}
	.right li h3{
		font-size: 0.425925rem;
		color: #323232;
		font-weight: 100;
		flex-grow: 1;
	}
	.right li span{
		width: 2.037037rem;
		color:#868686
	}
</style>
