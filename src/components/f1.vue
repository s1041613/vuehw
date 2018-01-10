<template>
 <div class="hello">
 
 <ul>
 	<li v-for="item in items">
 		<h3>名字：{{item.title}}</h3>
 		<p>描述：{{item.description}}
 		<img src="../assets/1-1.jpg" width="100" height="100">
 		</p>
 		
 	</li>
 </ul>
 	
 </div>
	

	 
</template>

<script>
	export default{
		name:'firstpage',
		data(){
			return{
				msg:"我要領養貓貓",
				items:[{title:'小乖' ,description:"她很乖很可愛啦!!",img:'1-1' }
					  ,{title:'小87' ,description:"她很乖很可愛啦!!",img:'1-2'  }
				
				]
			}
		}
	}
	
</script>

<style>
	
</style>