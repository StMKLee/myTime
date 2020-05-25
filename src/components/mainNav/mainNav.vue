<template>
  <div class="mNout" :style="{width:windowwidth-70+'px'}">
    <div class="mNin">
      <div class="navtxt" id="navitem" @mouseenter="gamexialashow">GAME</div>
      <div class="xiala" :style="{top:gxialaHeight+'px', left:gxialawidth+'px'}" v-show="gameshow" @mouseleave="gamexialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="gxialaitemshow" v-for="(item,index) in gitems" :key="index" @click="ggotoroute(index)">
            {{item.txt}}
          </div>
        </transition>
      </div>
      <div class="navtxt" @mouseenter="pxialashow">PRACTICAL</div>
      <div class="xiala" :style="{top:pxialaHeight+'px', left:pxialawidth+'px'}" v-show="pshow" @mouseleave="pxialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="pxialaitemshow" v-for="(item,index) in pitems" :key="index" @click="pgotoroute(index)">
            {{item.txt}}
          </div>
        </transition>
      </div>
      <div class="navtxt" @mouseenter="funxialashow">FUN</div>
      <div class="xiala" :style="{top:fxialaHeight+'px', left:fxialawidth+'px'}" v-show="funshow" @mouseleave="funxialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="fxialaitemshow" v-for="(item,index) in fitems" :key="index" @click="fgotoroute(index)">
            {{item.txt}}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        fxialaHeight:0,
        fxialawidth:0,
        funshow:false,
        gxialaHeight:0,
        gxialawidth:0,
        gameshow:false,
        pxialaHeight:0,
        pxialawidth:0,
        pshow:false,
        gxialaitemshow:false,
        pxialaitemshow:false,
        fxialaitemshow:false,
        gitems:[
          {
            txt:'2048',
            routeto:'/2048'
          }
        ],
        pitems:[
          {
            txt:'#p',
            routeto:'#'
          }
        ],
        fitems:[
          {
            txt:'#f',
            routeto:'#'
          }
        ]
      }
    },
    methods:{
      funxialashow:function(e){
        this.fxialawidth=e.clientX-e.offsetX-10;
        this.fxialaHeight=e.clientY-e.offsetY-10;
        this.funshow=true;
        var that=this;
        setTimeout(function(){
          that.fxialaitemshow=true;
        },50)
      },
      funxialahide:function(){
        if(this.funshow==true){
          this.funshow=false;
          this.fxialaitemshow=false;
        }
      },
      gamexialashow:function(e){
        this.gxialawidth=e.clientX-e.offsetX-10;
        this.gxialaHeight=e.clientY-e.offsetY-10;
        this.gameshow=true;
        var that=this;
        setTimeout(function(){
          that.gxialaitemshow=true;
        },50)
      },
      gamexialahide:function(){
        if(this.gameshow==true){
          this.gameshow=false;
          this.gxialaitemshow=false;
        }
      },
      pxialashow:function(e){
        this.pxialawidth=e.clientX-e.offsetX-10;
        this.pxialaHeight=e.clientY-e.offsetY-10;
        this.pshow=true;
        var that=this;
        setTimeout(function(){
          that.pxialaitemshow=true;
        },50)
      },
      pxialahide:function(){
        if(this.pshow==true){
          this.pshow=false;
          this.pxialaitemshow=false;
        }
      },
      ggotoroute:function(e){
        this.$router.push(this.gitems[e].routeto);
      },
      pgotoroute:function(e){
        
      },
      fgotoroute:function(e){
        
      }
    },
    computed:{
      windowheight:function(){   /* 获取视窗高度 */
        return document.documentElement.clientHeight;
      },
      windowwidth:function(){    /* 获取视窗宽度 */
        return window.screen.width;
      },
      navitemHeight:function(){
        return document.getElementById('navitem').offsetHeight;
      }
    },
    mounted() {

    }
  }
</script>

<style scoped="true">
  .mNout{
    height: auto;
  }
  .mNin{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(67, 72, 120, 0.4);
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    border-radius: 0 0 5rem 5rem;
  }
  .navtxt{
    color: #42B983;
    font-size: 1.0625rem;
    font-weight: 500;
    cursor: pointer;
  }
  .xiala{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 7.5rem;
    width: auto;
    background-image: linear-gradient(to bottom, #2f2f3b, #b4b4de, #2f2f3b);
    padding-top: 1.25rem;
    border-radius: 0 0 50% 50%;
  }
  .xialaitem{
    color: #313586;
    padding-bottom: 1.25rem;
    cursor: pointer;
  }
  .xldh-enter-active, .xldh-leave-active{
    transition: all .5s ease;
  }
  .xldh-enter, .xldh-leave-to{
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
