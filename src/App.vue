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
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq6JHbPz*XFh8JZTxjLGrnNwSp6Xddg2Tvc6YH02A2mGJoCNXC9zv*r20Ho8x9EkTbA!!/mnull&bo=UQY4BAAAAAARB1s!&rf=photolist&t=5");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;
  }
</style>
