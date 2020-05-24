<template>
  <div class="mcout">
    <div class="mcin">
      <slot>
        <div class="defaultC">
          <div class="intrtxtcn">
            "myTime"是由StMKLee编写的前端学习实践项目。包含“游戏”，“实用的”，“有趣”三个部分。
          </div>
          <div class="intrtxten">
            'myTime' is a front-end learning practice project written by StMKLee. It includes three parts: 'game', 'practical' and 'fun'.
          </div>
        </div>
      </slot>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .intrtxtcn, .intrtxten{
    margin-top: 1.875rem;
    padding-bottom: 1.875rem;
    text-align: center;
  }
  .defaultC{
    height: 100%;
    width: 85%;
  }
  .intrtxtcn{
    color: #074642;
    border-bottom: #bbbbbb 0.125rem dotted;
    font-size: 1.0625rem;
  }
  .intrtxten{
    color: #2b0c45;
    font-size: 0.90625rem;
  }
</style>
