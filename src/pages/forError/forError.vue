<template>
  <div class="error" :style="{height: windowheight+'px', width: windowwidth+'px'}">
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq3YfCGQxwqPI5Dwsrwjnd6L8zouMo5LKQr7Yc3EMG9P0GRtEqPOsewU.vjydhb6eQw!!/b&bo=yADIAAAAAAADByI!&rf=viewer_4"/>
    <p class="tip">您的网页咕咕咕了</p>
    <p class="back" @click="goback">Go Back</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    computed:{
      windowheight:function(){   /* 获取视窗高度 */
        return document.documentElement.clientHeight;
      },
      windowwidth:function(){    /* 获取视窗宽度 */
        return window.screen.width;
      }
    },
    methods:{
      goback:function(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped="true">
  .error{
    background-color: #90A8B7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tip{
    font-size: 3.125rem;
    color: #A60F2D;
    font-weight: 800;
  }
  .back{
    font-size: 1.875rem;
    margin-top: 1.25rem;
    color: #c56031;
    cursor: pointer;
  }
</style>
