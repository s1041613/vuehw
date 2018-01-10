<template>
	<div id="secondpage">
	 <div class="hello">
	 	<h1>{{msg}}</h1>
	 	<h2>姓名：<input type="text" v-model="a"></h2>
	  	<br>
	  	<h2>生日：<input type="text" v-model="b"></h2>
	  	<br>
	  	<h2>電子信箱：<input type="text" v-model="c"></h2>
	  	<br>
	  	<h2>領養對象：<input type="text" v-model="d"></h2>
	  	<br>
	  	<h2>領養動機：<input type="text" v-model="e"></h2>
	  	<br>
	  	
	 <input type="submit" v-on:click="alert">
	
	  
	 </div>
	 </div>
</template>

<script>
	export default{
		name:'secondpage',
		data(){
			return{
				 
				msg:"請填寫基本資料",
				a:" ",
				b:" ",
				c:" ",
				d:" ",
				e:" ",
			
			}
		},
		methods:{
			alert(){
				alert("請等候通知!!");
			}
		}
	}
</script>

<style>
	.hello h2{
		text-align: left;
		margin: 0px 0px 20px  20px;
		
	}
</style>