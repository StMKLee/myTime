<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="outcont">
        <div class="zhen" v-show="show1">
          <div class="z1d1"></div>
          <div class="z1d2"></div>
          <div class="z1d3"></div>
          <div class="z1d4">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z1d14">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
        </div>
        <div class="zhen" v-show="show2">
          <div class="z2d1"></div>
          <div class="z2d2"></div>
          <div class="z2d3"></div>
          <div class="z2d4"></div>
          <div class="z2d5"></div>
          <div class="z2d6"></div>
          <div class="z2d7"></div>
          <div class="z2d8"></div>
          <div class="z2d9"></div>
          <div class="z2d10">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z2d11">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z2d12">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z2d13">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z2d14">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
        </div>
        <div class="zhen" v-show="show3">
          <div class="z3d1"></div>
          <div class="z3d2"></div>
          <div class="z3d3"></div>
          <div class="z3d4"></div>
          <div class="z3d5"></div>
          <div class="z3d6"></div>
          <div class="z3d7"></div>
          <div class="z3d8"></div>
          <div class="z3d9"></div>
          <div class="z3d10"></div>
          <div class="z3d11"></div>
          <div class="z3d12"></div>
          <div class="z3d13"></div>
          <div class="z3d14"></div>
          <div class="z3d15"></div>
          <div class="z3d16"></div>
          <div class="z3d17"></div>
          <div class="z3d18">
            <div class="z3d19"></div>
          </div>
          <div class="z3d20"></div>
          <div class="z3d21">
            <div class="z3d22"></div>
          </div>
          <div class="z3d23">
            <div class="z3d24"></div>
          </div>
          <div class="z3d25">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d26">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d27">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d28">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d29">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d30">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d31">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d32">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d33">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d34">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d35">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d36">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d37">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
          </div>
          <div class="z3d38">
            <div class="z1d5"></div>
            <div class="z1d6"></div>
            <div class="z1d7"></div>
            <div class="z1d8"></div>
            <div class="z1d9"></div>
            <div class="z1d10"></div>
            <div class="z1d11"></div>
            <div class="z1d12"></div>
            <div class="z1d13"></div>
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
        show1:false,
        show2:false,
        show3:true
      }
    },
    methods:{

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
    width: 100%;
    height: 25rem;
    background-color: #000000;
    overflow: hidden;
  }
  .zhen{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .z1d1{
    bottom: 0;
    width: 100%;
    height: 3.75rem;
    position: absolute;
  }
  .z1d2{
    bottom: 0;
    position: absolute;
    width: 50.5%;
    height: 2.5rem;
    background-color: #367000;
    border-radius: 0 1.875rem 0.625rem 0;
  }
  .z1d3{
    bottom: 0;
    position: absolute;
    width: 49.5%;
    height: 2.5rem;
    background-color: #000000;
    border-radius: 0 1.75rem 0.9375rem 0;
  }
  .z1d4{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 83.5%;
    left: 44.2%;
    transform: rotate(-85deg);
  }
  .z1d14{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 80%;
    left: 48.2%;
    transform: rotate(45deg);
  }
  .z1d5{
    position: absolute;
    right: 50%;
    width: 0.5rem;
    height: 1.875rem;
    background-color: #00a200;
    border-radius: 100% 0 0 0;
  }
  .z1d6{
    position: absolute;
    right: 50%;
    top: 50%;
    width: 0.5rem;
    height: 1.25rem;
    background-color: #00a200;
    border-radius: 0 0 0 100%;
  }
  .z1d7{
    position: absolute;
    left: 50%;
    width: 0.5rem;
    height: 1.875rem;
    background-color: #00a200;
    border-radius: 0 100% 0 0;
  }
  .z1d8{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 1.25rem;
    background-color: #00a200;
    border-radius: 0 0 100% 0;
  }
  .z1d9{
    position: absolute;
    width: 0.0625rem;
    height: 75%;
    left: 48%;
    bottom: 10%;
    background-color: #000000;
  }
  .z1d10{
    position: absolute;
    width: 0.03125rem;
    height: 0.3125rem;
    left: 0.625rem;
    top: 30%;
    transform: rotate(45deg);
    background-color: #000000;
  }
  .z1d11{
    position: absolute;
    width: 0.03125rem;
    height: 0.3125rem;
    left: 0.375rem;
    top: 30%;
    transform: rotate(-45deg);
    background-color: #000000;
  }
  .z1d12{
    position: absolute;
    width: 0.03125rem;
    height: 0.4375rem;
    left: 0.6875rem;
    top: 60%;
    transform: rotate(40deg);
    background-color: #000000;
  }
  .z1d13{
    position: absolute;
    width: 0.03125rem;
    height: 0.4375rem;
    left: 0.3125rem;
    top: 60%;
    transform: rotate(-40deg);
    background-color: #000000;
  }
  .z2d1{
    bottom: 0;
    width: 100%;
    height: 3.125rem;
    position: absolute;
  }
  .z2d2{
    bottom: 0;
    position: absolute;
    width: 51.5%;
    height: 3.125rem;
    background-color: #367000;
    border-radius: 0 1.5625rem 0.375rem 0;
  }
  .z2d3{
    bottom: 0;
    position: absolute;
    width: 48%;
    height: 3.125rem;
    background-color: #000000;
    border-radius: 0 6.25rem 1.875rem 0;
  }
  .z2d4{
    bottom: 3.125rem;
    width: 100%;
    height: 3.125rem;
    position: absolute;
  }
  .z2d5{
    bottom: 3.125rem;
    right: 0;
    position: absolute;
    width: 56.4%;
    height: 3.125rem;
    background-color: #367000;
    border-radius: 6.25rem 0 0 3.125rem;
  }
  .z2d6{
    bottom: 3.125rem;
    right: 0;
    position: absolute;
    width: 52.5%;
    height: 3.125rem;
    background-color: #000000;
    border-radius: 3.125rem 0 0 2.5rem;
  }
  .z2d7{
    bottom: 6.25rem;
    width: 100%;
    height: 3.125rem;
    position: absolute;
  }
  .z2d8{
    bottom: 6.25rem;
    position: absolute;
    width: 50.8%;
    height: 3.125rem;
    background-color: #367000;
    border-radius: 0 6.25rem 1.875rem 0;
  }
  .z2d9{
    bottom: 6.25rem;
    position: absolute;
    width: 48.2%;
    height: 3.125rem;
    background-color: #000000;
    border-radius: 0 3.125rem 2.5rem 0;
  }
  .z2d10{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 83%;
    left: 42.5%;
    transform: rotate(-105deg);
  }
  .z2d12{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 78.5%;
    left: 50%;
    transform: rotate(60deg);
  }
  .z2d11{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 83.5%;
    left: 50.5%;
    transform: rotate(110deg);
  }
  .z2d13{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 70%;
    left: 51%;
    transform: rotate(105deg);
  }
  .z2d14{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 66.5%;
    left: 44%;
    transform: rotate(-60deg);
  }
  .z3d1{
    bottom: 0;
    width: 12%;
    height: 3.125rem;
    left: 44%;
    background-color: #367000;
    position: absolute;
  }
  .z3d2{
    bottom: 0;
    width: 47%;
    height: 3.125rem;
    left: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 0 1.875rem 0;
  }
  .z3d3{
    bottom: 0;
    width: 47%;
    height: 3.125rem;
    right: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 0 0 1.875rem;
  }
  .z3d4{
    bottom: 3.125rem;
    width: 6%;
    height: 5rem;
    left: 47%;
    background-color: #367000;
    position: absolute;
  }
  .z3d5{
    bottom: 8.125rem;
    width: 53%;
    height: 3.125rem;
    left: 0;
    background-color: #367000;
    position: absolute;
    border-radius: 0 1.875rem 0 0;
  }
  .z3d6{
    bottom: 8.125rem;
    width: 47%;
    height: 3.125rem;
    left: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 1.875rem 0 0;
  }
  .z3d7{
    bottom: 11.25rem;
    width: 57.5%;
    height: 3.125rem;
    right: 0;
    background-color: #367000;
    position: absolute;
    border-radius: 1.875rem 0 0 1.875rem;
  }
  .z3d8{
    bottom: 11.25rem;
    width: 52%;
    height: 3.125rem;
    right: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 1.875rem 0 0 1.875rem;
  }
  .z3d9{
    bottom: 14.375rem;
    width: 51%;
    height: 1.875rem;
    left: 0;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 1.25rem 0;
  }
  .z3d10{
    bottom: 14.375rem;
    width: 47%;
    height: 1.875rem;
    left: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 0 3.125rem 0;
  }
  .z3d11{
    bottom: 16.25rem;
    width: 53%;
    height: 1.875rem;
    right: 0;
    background-color: #367000;
    position: absolute;
    border-radius: 18.75rem 0 0 1.25rem;
  }
  .z3d12{
    bottom: 16.25rem;
    width: 49.05%;
    height: 1.875rem;
    right: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 6.25rem 0 0 0.625rem;
  }
  .z3d13{
    bottom: 18.125rem;
    width: 53%;
    height: 1.875rem;
    left: 0;
    background-color: #367000;
    position: absolute;
    border-radius: 0 6.25rem 0 0;
  }
  .z3d14{
    bottom: 18.125rem;
    width: 51%;
    height: 1.875rem;
    left: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .z3d15{
    top: 49.5%;
    width: 1.875rem;
    height: 1.875rem;
    left: 41.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 1.875rem;
    transform: rotate(-30deg);
  }
  .z3d16{
    top: 47.5%;
    width: 1.125rem;
    height: 1.125rem;
    left: 40.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 1.125rem;
    transform: rotate(150deg);
  }
  .z3d17{
    top: 48%;
    width: 1.25rem;
    height: 1.25rem;
    left: 39.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 1.25rem;
    transform: rotate(10deg);
  }
  .z3d18{
    top: 43%;
    width: 1.875rem;
    height: 1.25rem;
    left: 38.8%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 6.25rem 0 0;
    transform: rotate(10deg);
  }
  .z3d19{
    width: 0.625rem;
    height: 1.25rem;
    background-color: #000000;
    border-radius: 0 3.125rem 0 0;
  }
  .z3d20{
    top: 51.5%;
    width: 2.5rem;
    height: 2.5rem;
    left: 48.6%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z3d21{
    top: 47.5%;
    width: 3.75rem;
    height: 2.5rem;
    left: 53%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
  }
  .z3d22{
    width: 2.5rem;
    height: 1rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
  }
  .z3d23{
    top: 42.5%;
    width: 2.5rem;
    height: 1.25rem;
    left: 57.3%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z3d24{
    width: 1.25rem;
    height: 1.25rem;
    background-color: #000000;
    border-radius: 100% 0 0 0;
    right: 0;
    position: absolute;
  }
  .z3d25{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 50%;
    left: 40%;
    transform: rotate(-130deg);
  }
  .z3d26{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 42%;
    left: 38%;
    transform: rotate(-160deg);
  }
  .z3d27{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 38.5%;
    left: 36.8%;
    transform: rotate(-110deg);
  }
  .z3d28{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 39.2%;
    left: 40.5%;
    transform: rotate(125deg);
  }
  .z3d29{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 33%;
    left: 43%;
    transform: rotate(-50deg);
  }
  .z3d30{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 40%;
    left: 49.5%;
    transform: rotate(130deg);
  }
  .z3d31{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 36%;
    left: 50%;
    transform: rotate(80deg);
  }
  .z3d32{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 23%;
    left: 53.8%;
    transform: rotate(120deg);
  }
  .z3d33{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 45%;
    left: 60%;
    transform: rotate(100deg);
  }
  .z3d34{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 50%;
    left: 58%;
    transform: rotate(170deg);
  }
  .z3d35{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 37%;
    left: 55.2%;
    transform: rotate(-40deg);
  }
  .z3d36{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 37.5%;
    left: 61.5%;
    transform: rotate(98deg);
  }
  .z3d37{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 25%;
    left: 45%;
    transform: rotate(-95deg);
  }
  .z3d38{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 12.5%;
    left: 52.5%;
    transform: rotate(60deg);
  }
</style>
