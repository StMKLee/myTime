<template>
  <div class="mcout">
    <div class="mcin">

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
  .mcout{
    margin-top: 1.5625rem;
    margin-bottom: 1.875rem;
    background-image: radial-gradient(#646464,#000000);
    width: 90%;
    height: auto;
    border-radius: 6.25rem 6.25rem 6.25rem 6.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mcin{
    height: auto;
    min-height: 18.75rem;
    width: 80%;
    background-image: radial-gradient(#f0f0f0,#aaaaaa);
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
</style>
