<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed:{
    windowheight:function(){   /* 获取视窗高度 */
      return document.documentElement.clientHeight;
    },
    windowwidth:function(){    /* 获取视窗宽度 */
      return window.screen.width;
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
