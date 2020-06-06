<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="allcont">
        <div class="innav">
          <div class="navtxt" @click="showf">盘转</div>
          <div class="navtxt" @click="shows">针转</div>
          <div class="navtxt" @click="showt">方块</div>
        </div>
        <div class="zp">
          <div v-show="show1" class="rongqi">
            1
          </div>
          <div v-show="show2" class="rongqi">
            2
          </div>
          <div v-show="show3" class="rongqi">
            3
          </div>
        </div>
      </div>
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
        show1:true,
        show2:false,
        show3:false
      }
    },
    methods:{
      showf:function(){
        this.show1=true;
        this.show2=false;
        this.show3=false;
      },
      shows:function(){
        this.show1=false;
        this.show2=true;
        this.show3=false;
      },
      showt:function(){
        this.show1=false;
        this.show2=false;
        this.show3=true;
      }
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
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .allcont{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
  }
  .zp{
    margin-top: 1.25rem;
    width: 90%;
    height: auto;
    min-height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .innav{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }
  .navtxt{
    font-size: 1.375rem;
    color: #1D5BDF;
    opacity: 0.8;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
