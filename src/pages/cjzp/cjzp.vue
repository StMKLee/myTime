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
            <div class="anniu" @click="start1">抽奖</div>
          </div>
          <div v-show="show2" class="rongqi">
            <div class="zp2">
            </div>
            <div class="zz" :style="{transform:'rotate('+zd2+'deg)'}"></div>
            <div class="anniu" @click="start2">抽奖</div>
          </div>
          <div v-show="show3" class="rongqi">
            <div class="zp3">
              <div class="centertxt" @click="start3">
                抽奖
              </div>
              <div class="jiangxiang" v-for="(itm, idx) in jx" :key="idx" :style="{top:itm.tp+'px', left:itm.lt+'px', backgroundColor:itm.bdc}">
                {{idx}}
              </div>
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
        zd2:15,
        zt1:0,
        zt2:0,
        zt3:0,
        dh1:null,
        dh2:null,
        dh3:null,
        jx:[
          {
            tp:0,
            lt:0,
            bdc:'#ffffff'
          },
          {
            tp:0,
            lt:75,
            bdc:'#ffffff'
          },
          {
            tp:0,
            lt:150,
            bdc:'#ffffff'
          },
          {
            tp:0,
            lt:225,
            bdc:'#ffffff'
          },
          {
            tp:75,
            lt:225,
            bdc:'#ffffff'
          },
          {
            tp:150,
            lt:225,
            bdc:'#ffffff'
          },
          {
            tp:225,
            lt:225,
            bdc:'#ffffff'
          },
          {
            tp:225,
            lt:150,
            bdc:'#ffffff'
          },
          {
            tp:225,
            lt:75,
            bdc:'#ffffff'
          },
          {
            tp:225,
            lt:0,
            bdc:'#ffffff'
          },
          {
            tp:150,
            lt:0,
            bdc:'#ffffff'
          },
          {
            tp:75,
            lt:0,
            bdc:'#ffffff'
          }
        ]
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
      start1:function(){
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
              that.stop1();
            }
          },10)
        }
      },
      stop1:function(){
        var that=this;
        clearInterval(that.dh1);
        that.zt1=0;
      },
      start2:function(){
        var that=this;
        if(that.zt2===0){
          that.zt2=1;
          that.zd2=15;
          var a=Math.floor(Math.random()*12+1);
          var b=3615+a*30;
          that.dh2=setInterval(function(){
            if(that.zd2<=b){
              if(that.zd2<=1815){
                that.zd2+=6;
              }else if(that.zd2>1815&&that.zd2<=2895){
                that.zd2+=3;
              }else if(that.zd2>2895&&that.zd2<=3255){
                that.zd2+=1.5;
              }else if(that.zd2>3255&&that.zd2<=3615){
                that.zd2+=1;
              }else if(that.zd2>3615){
                that.zd2+=0.75;
              }
            }else{
              that.stop2();
            }
          },10)
        }
      },
      stop2:function(){
        var that=this;
        clearInterval(that.dh2);
        that.zt2=0;
      },
      start3:function(){
        var that=this;
        var i=0;
        var t=0;
        var a=Math.floor(Math.random()*12+1);
        var b=60+a;
        var c=0;
        for (var p=0;p<that.jx.length;p++) {
          that.jx[p].bdc='#ffffff';
        }
        if(that.zt3===0){
          that.zt3=1;
          that.dh3=setInterval(function(){
            if(c<30){
              if(i==0){
                that.jx[0].bdc='#f6e200';
                that.jx[11].bdc='#ffffff';
              }else{
                that.jx[i].bdc='#f6e200';
                that.jx[i-1].bdc='#ffffff';
              }
              t=t+1;
              if(t>=b){
                that.stop3();
              }else{
                if(i==11){
                  i=0;
                }else{
                  i=i+1;
                }
              }
            }else if(c>=30&&c<70){
              if(c%2==0){
                if(i==0){
                  that.jx[0].bdc='#f6e200';
                  that.jx[11].bdc='#ffffff';
                }else{
                  that.jx[i].bdc='#f6e200';
                  that.jx[i-1].bdc='#ffffff';
                }
                t=t+1;
                if(t>=b){
                  that.stop3();
                }else{
                  if(i==11){
                    i=0;
                  }else{
                    i=i+1;
                  }
                }
              }
            }else if(c>=70&&c<100){
              if(c%3==0){
                if(i==0){
                  that.jx[0].bdc='#f6e200';
                  that.jx[11].bdc='#ffffff';
                }else{
                  that.jx[i].bdc='#f6e200';
                  that.jx[i-1].bdc='#ffffff';
                }
                t=t+1;
                if(t>=b){
                  that.stop3();
                }else{
                  if(i==11){
                    i=0;
                  }else{
                    i=i+1;
                  }
                }
              }
            }else if(c>=100){
              if(c%6==0){
                if(i==0){
                  that.jx[0].bdc='#f6e200';
                  that.jx[11].bdc='#ffffff';
                }else{
                  that.jx[i].bdc='#f6e200';
                  that.jx[i-1].bdc='#ffffff';
                }
                t=t+1;
                if(t>=b){
                  that.stop3();
                }else{
                  if(i==11){
                    i=0;
                  }else{
                    i=i+1;
                  }
                }
              }
            }
            c+=1;
          }, 100)
        }
      },
      stop3:function(){
        var that=this;
        clearInterval(that.dh3);
        that.zt3=0;
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
  .zp2{
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq3LabKTewG9fE.D4F8VJu3ZnrVqOC0ttufHOZxRs2XNsbEoLJo98*tBs44gnR6holg!!/mnull&bo=xgHGAQAAAAADByI!&rf=photolist&t=5");
    width: 12.5rem;
    height: 12.5rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .zz{
    position: absolute;
    background-image: url("http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq.1diKU1yExIKYClNkEIfWpVmPA*VO7Y6JgeM1uTLk7nuWVAnd6ieK87cOO3tq75Wg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5");
    width: 10%;
    height: 45%;
    top: 16.5%;
    left: 45.15%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    transform-origin: 50% 75.5% 0;
  }
  .zp3{
    width: 18.75rem;
    height: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .centertxt{
    width: 9.375rem;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.875rem;
    color: #A60F2D;
    background-image: linear-gradient(#b87302,#fdd42d,#b87302);
    cursor: pointer;
  }
  .jiangxiang{
    position: absolute;
    width: 4.625rem;
    height: 4.625rem;
    border: #e0b5fa 0.03125rem solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
