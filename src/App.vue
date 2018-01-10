<template>
  <div id="app">
  <HelloWorld></HelloWorld>
   
   <router-link id="firstpage" to="/firstpage" ><h2>貓貓一覽</h2></router-link>
    
   <router-link id="secondpage" to="/secondpage"><h2>我要領養</h2></router-link>
  
    
   <router-view></router-view>
  
   
  
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
 
export default {
  name: 'app',
  components:{
  	HelloWorld 
  }
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
	
</style>
