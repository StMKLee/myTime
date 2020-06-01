<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="allcont">
        <div class="topcont">
          <div class="gamename">别踩白块儿</div>
          <div class="showscores">
            <div class="nowscore">
              score：
            </div>
            <div class="scorenum1">{{score}}</div>
            <div class="fgf">|</div>
            <div class="bestscore">
              best：
            </div>
            <div class="scorenum2">{{best}}</div>
          </div>
        </div>
        <div class="outkuang">
          <div>
            
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
        score:0,
        best:0
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
  }
  .topcont{
    width: 100%;
    margin-top: 1em;
    margin-bottom: 3.75rem;
    height: auto;
    position: relative;
  }
  .gamename{
    left: 2.5rem;
    font-size: 2.1875rem;
    font-weight: 900;
    color: #28acd0;
    position: absolute;
    margin-top: 0.625rem;
  }
  .nowscore{
    position: absolute;
    right: 16.25rem;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #950d28;
    margin-top: 1.25rem;
  }
  .bestscore{
    position: absolute;
    right: 5rem;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #950d28;
    margin-top: 1.25rem;
  }
  .scorenum1{
    position: absolute;
    font-size: 1.5625rem;
    color: #d66b00;
    margin-top: 1.5625rem;
    right: 12.5rem;
  }
  .scorenum2{
    position: absolute;
    font-size: 1.5625rem;
    color: #d66b00;
    right: 1.25rem;
    margin-top: 1.5625rem;
  }
  .fgf{
    position: absolute;
    right: 10.8125rem;
    margin-top: 1.1875rem;
    color: #09a8ec;
    font-size: 1.875rem;
    opacity: 0.4;
  }
  .outkuang{
    width: 18.75rem;
    height: 31.25rem;
    border-top: #ede899 0.1875rem solid;
    border-bottom: #ede899 0.1875rem solid;
    border-right: #1d5bdf 0.9375rem solid;
    border-left: #1d5bdf 0.9375rem solid;
    border-radius: 3%;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    background-color: #ffffff;
  }
</style>
