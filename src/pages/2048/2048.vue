<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="outcont">
        <div class="incont" @mousedown.prevent="sidestart" @mouseup.prevent="sideend">
          <div v-for="(item, index) in 16" :key="index" class="wangge">
            　
          </div>
          <div class="fangkuai" v-for="(itm, idx) in allarea" :key="idx" :style="{top:itm.tpo+'px', left:itm.lpo+'px'}" v-show="itm.has">
            <div class="numtxt">
              {{itm.num}}
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
        /* 鼠标按紧滑动方向判断变量 */
        walkX:0,
        walkY:0,
        sX:0,
        sY:0,
        allarea:[
          {
            id:0,
            tpo:0,
            lpo:0,
            has:true,
            num:2
          },
          {
            id:1,
            tpo:0,
            lpo:76,
            has:true,
            num:2
          },
          {
            id:2,
            tpo:0,
            lpo:151,
            has:true,
            num:2
          },
          {
            id:3,
            tpo:0,
            lpo:226,
            has:true,
            num:2
          },
          {
            id:4,
            tpo:76,
            lpo:0,
            has:true,
            num:2
          },
          {
            id:5,
            tpo:76,
            lpo:76,
            has:true,
            num:2
          },
          {
            id:6,
            tpo:76,
            lpo:151,
            has:true,
            num:2
          },
          {
            id:7,
            tpo:76,
            lpo:226,
            has:true,
            num:2
          },
          {
            id:8,
            tpo:151,
            lpo:0,
            has:true,
            num:2
          },
          {
            id:9,
            tpo:151,
            lpo:76,
            has:true,
            num:2
          },
          {
            id:10,
            tpo:151,
            lpo:151,
            has:true,
            num:2
          },
          {
            id:11,
            tpo:151,
            lpo:226,
            has:true,
            num:2
          },
          {
            id:12,
            tpo:226,
            lpo:0,
            has:true,
            num:2
          },
          {
            id:13,
            tpo:226,
            lpo:76,
            has:true,
            num:2
          },
          {
            id:14,
            tpo:226,
            lpo:151,
            has:true,
            num:2
          },
          {
            id:15,
            tpo:226,
            lpo:226,
            has:true,
            num:2
          }
        ]
      }
    },
    methods:{
      sidestart:function(e){
        this.sX=e.clientX;
        this.sY=e.clientY;
      },
      sideend:function(e){
        this.walkX=e.clientX-this.sX;
        this.walkY=e.clientY-this.sY;
        if(Math.abs(this.walkX)>Math.abs(this.walkY)){
          if(this.walkX>50){
            this.toright();
          }else if(this.walkX<-50){
            this.toleft();
          }
        }else{
          if(this.walkY>50){
            this.tobottom();
          }else if(this.walkY<-50){
            this.totop();
          }
        }
      },
      toright:function(){
        console.log('right')
      },
      toleft:function(){
        console.log('left')
      },
      tobottom:function(){
        console.log('bottom')
      },
      totop:function(){
        console.log('top')
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
  .outcont{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    border: #ce984b 1.875rem solid;
    border-radius: 30%;
    background-color: #392f1c;
    margin: 1.875rem;
  }
  .incont{
    margin: 2.8125rem;
    width: 18.75rem;
    height: 18.75rem;
    border: #625f58 0.25rem;
    border-style: inset;
    background-color: #fae596;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    cursor: pointer;
    position: relative;
  }
  .wangge{
    width: 4.5625rem;
    height: 4.5625rem;
    border: #d2bde0 0.0625rem solid;
  }
  .fangkuai{
    position: absolute;
    background-image: linear-gradient(to bottom, #f0c102, #fafa40, #f0c102);
    width: 4.5625rem;
    height: 4.5625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .numtxt{
    color: #c5114a;
    font-size: 1.875rem;
    font-weight: 600;
  }
</style>
