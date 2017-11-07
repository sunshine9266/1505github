<template>
  <div id="header">
    <header><img src="../../static/images/logo1.png"/></header>
    <ul>
    	<!--<li @click="activeLi(1)" :class="{'liActive':num==1}">常用</li>
    	<li @click="activeLi(2)" :class="{'liActive':num==2}">特色</li>
    	<li @click="activeLi(3)" :class="{'liActive':num==3}">搜索</li>-->
    	<li v-for="(data,index) in topArr"  @click="activeLi(index)" :class="{'liActive':num==index}">{{data}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    	num:2,
    	topArr:["常用","特色","搜索"]
    }
  },
  methods:{
  	activeLi(index){
  		this.num=index;
  	}
  }
}
</script>
<style>
	#header{
		border-bottom: 1px dashed #cccccc;
		width: 100%;
		height: 1.148148rem;
		font-size: 0.518518rem;
		color: #a8a8a8;
		text-align: center;
		display: flex;
		justify-content: space-between;
	}
	#header header{
		margin-left: 0.277777rem;
		line-height:1.148148rem;
	}
	#header header img{
		width: 2.944444rem;
		height: 0.851851rem;
	}
	#header ul{
		margin-right: 0.277777rem;
		display: flex;
		height: 1.148148rem;
	}
	#header ul li{
		width: 1.574074rem;
		line-height:1.148148rem;
	}
	.liActive{
		color: #ff9849;
		border-bottom: 2px solid #ff9849;
	}
	
</style>
