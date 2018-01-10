<template>
<div>
   <img src="../assets/1.jpg" width="400" height="400">
 <div class="hello">
 
  <h1>{{msg}}</h1>
   
 </div> 
    
  

</div>
</template>

<script>
 
	export default{
		name:'HelloWorld',
		data(){
			return{
				msg:"歡迎領養貓咪",
				
			}
		}
		 
 }
	
	
</script>

<style>
.hello{
		width:400px;
		height:200;
		border:2px solid blueviolet;
		margin:20px auto ;
		font-size: 25px;
	}	
</style>