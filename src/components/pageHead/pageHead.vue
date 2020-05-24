<template>
  <div class="pHout" :style="{width:windowwidth-70+'px'}">
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aqy6w*nvy4a3BDSQsefXQv2opNnVKDpymXnDcDs2hsDfxOZ9KEjLpeSO2g9FREP21iA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5" class="mylogo"/>
    <div class="titletxt">myTime</div>
    <div class="user">
      <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq4s0LToTSTBVJulrGIpPiz5OmYDCwl40ae3EpmM.KjpfZH2lAAqcSu4ghCmOVgWxlg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5"/>
      <div class="untxt" @click="openlogin">
        StMKLee
      </div>
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
    },
    mounted:function(){

    }
  }
</script>

<style scoped="true">
  .pHout{
    height: 6.25rem;
    background-color: rgba(0, 0, 0, 0.4);
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
    border-radius: 6.25rem 6.25rem 0 0;
  }
  .titletxt{
    font-size: 2.5rem;
    font-weight: 650;
    color: rgba(38, 130, 200, 0.8);
    font-style: italic;
    margin-left: 1%;
  }
  .mylogo{
    width: 6.25rem;
    height: 5rem;
    margin-left: 10%;
  }
  .user{
    display: flex;
    align-items: flex-end;
    width: auto;
    margin-left: 40%;
  }
  .user img{
    width: 5rem;
    height: 5rem;
  }
  .untxt{
    margin-left: 0.625rem;
    font-size: 1.25rem;
    color: rgba(200, 152, 29, 0.6);
  }
</style>
