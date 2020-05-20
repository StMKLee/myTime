<template>
  <div class="outest" :style="{minHeight: windowheight+'px', width: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead/pageHead.vue'
  import mainNav from '../../components/mainNav/mainNav.vue'

  export default{
    data(){
      return{

      }
    },
    methods:{

    },
    components:{
      pageHead,
      mainNav
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

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .outest{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq6JHbPz*XFh8JZTxjLGrnNwSp6Xddg2Tvc6YH02A2mGJoCNXC9zv*r20Ho8x9EkTbA!!/mnull&bo=UQY4BAAAAAARB1s!&rf=photolist&t=5");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
