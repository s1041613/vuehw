<template>
	<div id="firstpage">
 <div class="hello">
 	<h1>{{msg}}</h1>
 
 <ul>
 	<li v-for="item in items">
 	<h3>名字：{{item.title}}</h3>
 	<p>描述：{{item.description}}</p>
 	<p>照片：<img src="../assets/1-1.jpg" width="100" height="100"></p>
  
 		
 	</li>
 </ul>
  	 <router-link id="app" to="/app">回首頁</router-link>
 </div>
 </div>
	

	 
</template>

<script>
	export default{
		name:'firstpage',
		data(){
			return{
				
				msg:"貓貓一覽",
				items:[{title:'小乖' ,description:"她很乖很可愛啦!!",img:"1-1.jpg"}
					  ,{title:'小87' ,description:"她愛吃罐頭，還沒學會用貓砂盆",img:'1-2.jpg'}
				
				]
			}
		}
	}
	
</script>

<style>
	.hello ul li{
		list-style:none;
		text-align:left
	}
	
</style>