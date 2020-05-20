<template>
  <div class="pHout" :style="{width:windowwidth-70+'px'}">
    <div class="titletxt">myTime</div>
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aqy6w*nvy4a3BDSQsefXQv2opNnVKDpymXnDcDs2hsDfxOZ9KEjLpeSO2g9FREP21iA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5" class="mylogo"/>
    <div class="titintro">
      我的一个网站
    </div>
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq*OlHrp8khPjVc*vEKIMSPSdIkX9L*gRVQHhGdEv7qCTU4269loA1uENHHj09UHivg!!/b&bo=zgDIAAAAAAADByQ!&rf=viewer_4" class="rocketlogo firstrocket"/>
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq*OlHrp8khPjVc*vEKIMSPSdIkX9L*gRVQHhGdEv7qCTU4269loA1uENHHj09UHivg!!/b&bo=zgDIAAAAAAADByQ!&rf=viewer_4" class="rocketlogo"/>
    <img src="http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq*OlHrp8khPjVc*vEKIMSPSdIkX9L*gRVQHhGdEv7qCTU4269loA1uENHHj09UHivg!!/b&bo=zgDIAAAAAAADByQ!&rf=viewer_4" class="rocketlogo"/>
    <div class="user">
      <img :src="userimg"/>
      <div class="untxt" @click="openlogin">
        {{username}}
      </div>
    </div>
    <div class="login" v-if="loginshow">
      <div class="lmout"><div class="loginMess">用户名：</div></div>
      <input type="text" maxlength="10" placeholder="请输入用户名" v-model="inputname" class="getUM"/>
      <div class="lmout"><div class="loginMess">头像图片：</div></div>
      <input type="url" maxlength="-1" placeholder="请输入图片地址(仅支持网络图片)" v-model="inputimg" class="getUM"/>
      <div class="lb">
        <button class="loginbutton" @click="submitUM">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        username:"请登录",
        userimg:"http://m.qpic.cn/psc?/V103RcfH1G3LXq/N6ix9ropXhYRy3eob.4Aq3wyvyh4izLwiBvJ4nSZmXf0IOVLTfVEsGWvm987to78PMh7.OATC3mTpuzDf2sGBA!!/b&bo=yADIAAAAAAADByI!&rf=viewer_4",
        loginshow:false,
        inputimg:"",
        inputname:""
      }
    },
    methods:{
      openlogin:function(){
        this.loginshow=true
      },
      getUserMess:function(){
        var that=this;
        if(that.$store.state.username){
          that.username=that.$store.state.username
        };
        if(that.$store.state.userimg){
          that.userimg=that.$store.state.userimg
        }
      },
      submitUM:function(){
        if(this.inputimg!="" && this.inputname!=""){
          this.username=this.inputname;
          this.$store.state.username=this.inputname;
          this.userimg=this.inputimg;
          this.$store.state.userimg=this.inputimg;
          this.loginshow=false;
        }else{
          alert("用户信息不能为空")
        }
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
    mounted:function(){
      this.getUserMess();
    }
  }
</script>

<style scoped="true">
  .pHout{
    height: 6.25rem;
    background-color: rgba(0,0,0,0.4);
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
    border-radius: 6.25rem;
  }
  .titletxt{
    font-size: 2.5rem;
    font-weight: 650;
    color: rgba(38, 130, 200, 0.8);
    margin-left: 3.125rem;
    font-style: italic;
  }
  .mylogo{
    width: 6.25rem;
    height: 5rem;
    margin-left: 1.25rem;
  }
  .titintro{
    font-size: 1rem;
    color: rgba(227, 194, 75, 0.7);
    margin-left: 0.9375rem;
    margin-top: 2.5rem;
  }
  .rocketlogo{
    width: 3.125rem;
    height: 3.125rem;
    opacity: 0.5;
  }
  .firstrocket{
    margin-left: 7.5rem;
  }
  .user{
    margin-left: 7.5rem;
    display: flex;
    align-items: flex-end;
    width: auto;
  }
  .user img{
    width: 5rem;
    height: 5rem;
  }
  .untxt{
    margin-left: 0.625rem;
    font-size: 1.25rem;
    color: rgba(200, 152, 29, 0.6);
    cursor: pointer;
  }
  .login{
    position: fixed;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.8);
    top: 20%;
    height: 60%;
    left: 25%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .getUM{
    width: 18.75rem;
    height: auto;
    background-color: #95b1b7;
    color: #160f2e;
  }
  .lb{
    width: 18.75rem;
    height: auto;
    text-align: center;
  }
  .loginbutton{
    border-radius: 1.25rem;
    width: 3.75rem;
    height: 1.875rem;
    color: #ececec;
    background-color: #5de261;
    margin-top: 2.5rem;
  }
  .loginMess{
    margin-top: 1.875rem;
    margin-bottom: 0.625rem;
  }
  .lmout{
    text-align: start;
    width: 18.75rem;
    height: auto;
  }
</style>
