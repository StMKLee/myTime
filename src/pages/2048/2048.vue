<template>
  <div class="outest" :style="{minHeight: windowheight+'px', width: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div>2048</div>
    </main-cont>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead/pageHead.vue'
  import mainNav from '../../components/mainNav/mainNav.vue'
  import mainCont from '../../components/maincont/maincont.vue'

  export default{
    data(){
      return{
        
      }
    },
    methods:{

    },
    components:{
      pageHead,
      mainNav,
      mainCont
    },
    computed:{
      windowheight:function(){   /* 获取视窗高度 */
        return document.documentElement.clientHeight;
      },
      windowwidth:function(){    /* 获取视窗宽度 */
        return window.screen.width;
      }
    },
    mounted() {
      
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
  }
</style>
