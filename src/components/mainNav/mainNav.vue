<template>
  <div class="mNout" :style="{width:windowwidth-70+'px'}">
    <div class="mNin">
      <div class="navtxt">GAME</div>
      <div class="navtxt">PRACTICAL</div>
      <div class="navtxt">FUN</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{

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

<style scoped="true">
  .mNout{
    height: auto;
    position: relative;
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
  }
</style>
