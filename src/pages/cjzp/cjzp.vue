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
            <div class="zp1" :style="{transform:'rotate('+zd1+'deg)'}">
            </div>
            <div class="sjf"></div>
            <div class="anniu" @click="start">抽奖</div>
          </div>
          <div v-show="show2" class="rongqi">
            <div class="zp2">

            </div>
          </div>
          <div v-show="show3" class="rongqi">
            <div class="zp3">

            </div>
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
        show3:false,
        zd1:15,
        zt1:0,
        dh1:null
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
      },
      start:function(){
        var that=this;
        if(that.zt1===0){
          that.zt1=1;
          that.zd1=15;
          var a=Math.floor(Math.random()*12+1);
          var b=3615+a*30;
          that.dh1=setInterval(function(){
            if(that.zd1<=b){
              if(that.zd1<=1815){
                that.zd1+=6;
              }else if(that.zd1>1815&&that.zd1<=2895){
                that.zd1+=3;
              }else if(that.zd1>2895&&that.zd1<=3255){
                that.zd1+=1.5;
              }else if(that.zd1>3255&&that.zd1<=3615){
                that.zd1+=1;
              }else if(that.zd1>3615){
                that.zd1+=0.75;
              }
            }else{
              that.stop();
            }
          },10)
        }
      },
      stop:function(){
        var that=this;
        clearInterval(that.dh1);
        that.zt1=0;
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
  .rongqi{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .zp1{
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq3LabKTewG9fE.D4F8VJu3ZnrVqOC0ttufHOZxRs2XNsbEoLJo98*tBs44gnR6holg!!/mnull&bo=xgHGAQAAAAADByI!&rf=photolist&t=5");
    width: 12.5rem;
    height: 12.5rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .sjf{
    position: absolute;
    top: 0;
    left: 48.8%;
    width: 3%;
    height: 15%;
    z-index: 5;
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq716Iz.DkN58gOrY.AvikoPUeQyZb5LA7NYdoa57FIRN3BcT5TCxw3NoayhxF.zqpQ!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .anniu{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.25rem;
    width: 3.75rem;
    height: 1.875rem;
    font-size: 1.25rem;
    color: #fc0000;
    background-image: radial-gradient(#f6aa4d,#f46e00);
    border: #ffee00 0.125rem outset;
    position: absolute;
    bottom: -30%;
    cursor: pointer;
  }
</style>
