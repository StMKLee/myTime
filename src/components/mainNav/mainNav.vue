<template>
  <div class="mNout" :style="{width:windowwidth-70+'px'}">
    <div class="mNin">
      <div class="navtxt" id="navitem" @mouseover="gamexialashow">GAME</div>
      <div class="xiala" :style="{top:gxialaHeight+'px', left:gxialawidth+'px'}" v-show="gameshow" @mouseleave="gamexialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="gxialaitemshow">
            1
          </div>
        </transition>
      </div>
      <div class="navtxt" @mouseover="pxialashow">PRACTICAL</div>
      <div class="xiala" :style="{top:pxialaHeight+'px', left:pxialawidth+'px'}" v-show="pshow" @mouseleave="pxialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="pxialaitemshow">
            1
          </div>
        </transition>
      </div>
      <div class="navtxt" @mouseover="funxialashow">FUN</div>
      <div class="xiala" :style="{top:fxialaHeight+'px', left:fxialawidth+'px'}" v-show="funshow" @mouseleave="funxialahide">
        <transition name="xldh">
          <div class="xialaitem" v-show="fxialaitemshow">
            1
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
        fxialaitemshow:false
      }
    },
    methods:{
      funxialashow:function(e){
        this.fxialawidth=e.clientX-e.offsetX;
        this.fxialaHeight=e.clientY-e.offsetY;
        this.funshow=true;
        var that=this;
        setTimeout(function(){
          that.fxialaitemshow=true;
        },100)
      },
      funxialahide:function(){
        if(this.funshow==true){
          this.funshow=false;
          this.fxialaitemshow=false;
        }
      },
      gamexialashow:function(e){
        this.gxialawidth=e.clientX-e.offsetX;
        this.gxialaHeight=e.clientY-e.offsetY;
        this.gameshow=true;
        var that=this;
        setTimeout(function(){
          that.gxialaitemshow=true;
        },100)
      },
      gamexialahide:function(){
        if(this.gameshow==true){
          this.gameshow=false;
          this.gxialaitemshow=false;
        }
      },
      pxialashow:function(e){
        this.pxialawidth=e.clientX-e.offsetX;
        this.pxialaHeight=e.clientY-e.offsetY;
        this.pshow=true;
        var that=this;
        setTimeout(function(){
          that.pxialaitemshow=true;
        },100)
      },
      pxialahide:function(){
        if(this.pshow==true){
          this.pshow=false;
          this.pxialaitemshow=false;
        }
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
  }
  .xialaitem{
    color: #313586;
    padding-bottom: 1.25rem;
  }
  .xldh-enter-active, .xldh-leave-active{
    transition: all .5s ease;
  }
  .xldh-enter, .xldh-leave-to{
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
