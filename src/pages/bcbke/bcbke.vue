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
          <div v-if="gsshow" class="gscont">
            <div class="gstxt" @click="startgame">START</div>
          </div>
          <div class="gocont" v-show="gameover">
            <div class="gotxt">GAME OVER</div>
            <div class="retxt" @click="newGame">new game</div>
          </div>
          <div class="whitearea" v-for="(itm, idx) in 3" :key="idx" @click="gameovershow">
          </div>
          <div class="blackkuai" v-for="(item,index) in fangkuais" :key="index" :style="{backgroundColor:item.bgcolor, top:item.top+'px', left:item.left+'px'}" @click="getit(index)">
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
        best:0,
        gameover:false,
        gametime:0,
        gsshow:true,
        sulv:5,
        jishiInterval:null,
        fangkuais:[
          {
            bgcolor:'#000000',
            top:0,
            left:0
          },
          {
            bgcolor:'#000000',
            top:0,
            left:0
          },
          {
            bgcolor:'#000000',
            top:0,
            left:0
          },
          {
            bgcolor:'#000000',
            top:0,
            left:0
          },
          {
            bgcolor:'#000000',
            top:0,
            left:0
          }
        ]
      }
    },
    methods:{
      gameovershow:function(){
        this.gameover=true;
        var that=this;
        clearInterval(that.jishiInterval);
        that.gametime=0;
      },
      newGame:function(){
        this.score=0;
        this.gameover=false;
        this.init();
        this.gsshow=true;
      },
      jishi:function(){
        var that=this;
        that.jishiInterval=setInterval(function(){
          that.gametime+=1;
        }, 1000);
      },
      getit:function(e){
        this.fangkuais[e].bgcolor='#148800';
      },
      init:function(){
        this.fangkuais[0].top=-125;
        this.fangkuais[1].top=-250;
        this.fangkuais[2].top=-375;
        this.fangkuais[3].top=-500;
        this.fangkuais[4].top=-625;
        var a;
        var b;
        for (var i=0;i<this.fangkuais.length;i++) {
          this.fangkuais[i].bgcolor='#000000';
          a=Math.random()*3;
          Math.floor(a);
          if(b===0){
            this.fangkuais[i].left=0;
          }else if(b===1){
            this.fangkuais[i].left=101;
          }else if(b===2){
            this.fangkuais[i].left=201;
          }
        }
      },
      startgame:function(){
        this.gsshow=false;
        this.jishi();
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
      this.init();
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
    background-color: #a6a6a6;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
  }
  .whitearea{
    width: 6.125rem;
    height: 31.25rem;
    border-left: rgba(10, 244, 198, 0.3) 0.0625rem solid;
    border-right: rgba(10, 244, 198, 0.3) 0.0625rem solid;
    background-color: #ffffff;
    z-index: 2;
  }
  .gocont{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.7;
    z-index: 99;
  }
  .gotxt{
    font-size: 2.8125rem;
    color: #fa0004;
    margin-top: 50%;
  }
  .retxt{
    font-size: 1.5625rem;
    margin-top: 30%;
    color: #0800fc;
    border-bottom: #0800fc 0.0625rem solid;
  }
  .blackkuai{
    position: absolute;
    z-index: 10;
    height: 7.75rem;
    width: 6.25rem;
    border-bottom: #950D28 0.0625rem solid;
  }
  .gstxt{
    color: #ebb511;
    font-size: 2.1875rem;
    font-weight: 700;
    z-index: 3;
  }
  .gscont{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
</style>
