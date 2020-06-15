<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="outcont">
        <transition name="hz" mode="out-in">
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
        </transition>
        <transition name="hz" mode="out-in">
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
        </transition>
        <transition name="hz" mode="out-in">
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
        </transition>
        <transition name="hz" mode="out-in">
          <div class="zhen" v-show="show4">
            <div class="z4d1"></div>
            <div class="z4d2"></div>
            <div class="z4d3"></div>
            <div class="z4d4"></div>
            <div class="z4d5"></div>
            <div class="z4d6"></div>
            <div class="z4d7"></div>
            <div class="z4d8"></div>
            <div class="z4d9"></div>
            <div class="z4d10"></div>
            <div class="z4d11"></div>
            <div class="z4d12"></div>
            <div class="z4d13">
              <div class="z4d14"></div>
            </div>
            <div class="z4d15">
              <div class="z4d16"></div>
            </div>
            <div class="z4d17">
              <div class="z4d18"></div>
            </div>
            <div class="z4d19">
              <div class="z4d20"></div>
            </div>
            <div class="z4d21"></div>
            <div class="z4d22">
              <div class="z4d23"></div>
            </div>
            <div class="z4d24">
              <div class="z4d25"></div>
            </div>
            <div class="z4d26">
              <div class="z4d27"></div>
            </div>
            <div class="z4d28"></div>
            <div class="z4d29"></div>
            <div class="z4d30">
              <div class="z4d31"></div>
            </div>
            <div class="z4d32">
              <div class="z4d33"></div>
            </div>
            <div class="z4d34">
              <div class="z4d35"></div>
            </div>
            <div class="z4d36"></div>
            <div class="z4d37">
              <div class="z4d38"></div>
            </div>
            <div class="z4d39">
              <div class="z4d40"></div>
            </div>
            <div class="z4d41"></div>
            <div class="z4d42">
              <div class="z4d43"></div>
            </div>
            <div class="z4d44"></div>
            <div class="z4d45">
              <div class="z4d46"></div>
            </div>
            <div class="z4d47">
              <div class="z4d48"></div>
            </div>
            <div class="z4d49">
              <div class="z4d50"></div>
            </div>
            <div class="z4d51">
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
            <div class="z4d52">
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
            <div class="z4d53">
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
            <div class="z4d54">
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
            <div class="z4d55">
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
            <div class="z4d56">
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
            <div class="z4d57">
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
            <div class="z4d58">
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
            <div class="z4d59">
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
            <div class="z4d60">
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
            <div class="z4d61">
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
            <div class="z4d62">
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
            <div class="z4d63">
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
            <div class="z4d64">
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
            <div class="z4d65">
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
            <div class="z4d66">
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
            <div class="z4d67">
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
            <div class="z4d68">
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
            <div class="z4d69">
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
            <div class="z4d70">
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
            <div class="z4d71">
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
            <div class="z4d72">
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
            <div class="z4d73">
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
            <div class="z4d74">
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
            <div class="z4d75">
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
            <div class="z4d76">
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
            <div class="z4d77">
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
            <div class="z4d78">
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
            <div class="z4d79">
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
            <div class="z4d80">
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
            <div class="z4d81">
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
            <div class="z4d82">
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
            <div class="z4d83">
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
            <div class="z4d84">
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
            <div class="z4d85">
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
            <div class="z4d86">
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
            <div class="z4d87">
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
            <div class="z4d88">
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
            <div class="z4d89">
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
            <div class="z4d90">
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
            <div class="z4d91">
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
            <div class="z4d92">
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
            <div class="z4d93">
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
            <div class="z4d94">
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
            <div class="z4d95">
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
            <div class="z4d96">
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
            <div class="z4d97">
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
            <div class="z4d98">
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
            <div class="z4d99">
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
            <div class="z4d100">
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
            <div class="z4d101">
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
            <div class="guo1" v-show="guoshow" :style="{opacity: guoliang1}"></div>
            <div class="guo2" v-show="guoshow" :style="{opacity: guoliang2}"></div>
            <div class="guo3" v-show="guoshow" :style="{opacity: guoliang3}"></div>
            <div class="guo4" v-show="guoshow" :style="{opacity: guoliang4}"></div>
            <div class="guo5" v-show="guoshow" :style="{opacity: guoliang5}"></div>
            <div class="guo6" v-show="guoshow" :style="{opacity: guoliang6}"></div>
            <div class="guo7" v-show="guoshow" :style="{opacity: guoliang7}"></div>
            <div class="guo8" v-show="guoshow" :style="{opacity: guoliang8}"></div>
          </div>
        </transition>
        <div class="zhen" v-show="chongshow">
          <div class="chong" v-for="(itm, idx) in chongs" :key="idx" :style="{top:itm.top+'px',left:itm.left+'px',opacity:itm.opa}">
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
        show3:false,
        show4:true,
        guoshow:false,
        chongshow:false,
        guoliang1:0.3,
        guoliang2:0.6,
        guoliang3:0.5,
        guoliang4:0.7,
        guoliang5:0.5,
        guoliang6:0.3,
        guoliang7:0.4,
        guoliang8:0.6,
        guodh:null,
        chongdh:null,
        gzt1:1,
        gzt2:1,
        gzt3:1,
        gzt4:1,
        gzt5:1,
        gzt6:1,
        gzt7:1,
        gzt8:1,
        chongs:[
          {
            top:100,
            left:90,
            opa:0.9,
            czt:1
          },
          {
            top:300,
            left:650,
            opa:0.9,
            czt:1
          },
          {
            top:200,
            left:780,
            opa:0.9,
            czt:1
          },
          {
            top:60,
            left:820,
            opa:0.7,
            czt:1
          },
          {
            top:30,
            left:610,
            opa:0.8,
            czt:1
          },
          {
            top:60,
            left:330,
            opa:0.7,
            czt:1
          },
          {
            top:200,
            left:380,
            opa:0.8,
            czt:1
          },
          {
            top:230,
            left:500,
            opa:0.8,
            czt:1
          },
          {
            top:340,
            left:430,
            opa:0.6,
            czt:1
          },
          {
            top:200,
            left:210,
            opa:0.6,
            czt:1
          },
          {
            top:300,
            left:110,
            opa:0.6,
            czt:1
          },
          {
            top:20,
            left:160,
            opa:0.7,
            czt:1
          },
          {
            top:280,
            left:320,
            opa:0.5,
            czt:1
          },
          {
            top:210,
            left:30,
            opa:0.5,
            czt:1
          },
          {
            top:150,
            left:450,
            opa:0.7,
            czt:1
          },
          {
            top:320,
            left:800,
            opa:0.5,
            czt:1
          }
        ]
      }
    },
    methods:{
      chongstart:function(){
        var that=this;
        that.chongshow=true;
        that.chongdh=setInterval(function(){
          for (let i=0;i<that.chongs.length;i++) {
            if(that.chongs[i].czt===1&&that.chongs[i].opa<1){
              that.chongs[i].opa+=0.05;
            }else if(that.chongs[i].czt===0&&that.chongs[i].opa>0.5){
              that.chongs[i].opa-=0.05;
            }else if(that.chongs[i].opa>=1){
              that.chongs[i].czt=0;
            }else if(that.chongs[i].opa<=0.5){
              that.chongs[i].czt=1;
            };
          };
        }, 100)
      },
      guostart:function(){
        var that=this;
        that.guoshow=true;
        that.guodh=setInterval(function(){
          if(that.gzt1===1&&that.guoliang1<0.8){
            that.guoliang1+=0.05;
          }else if(that.gzt1===0&&that.guoliang1>0.3){
            that.guoliang1-=0.05;
          }else if(that.guoliang1>=0.8){
            that.gzt1=0;
          }else if(that.guoliang1<=0.3){
            that.gzt1=1;
          };
          if(that.gzt2===1&&that.guoliang2<0.8){
            that.guoliang2+=0.05;
          }else if(that.gzt2===0&&that.guoliang2>0.3){
            that.guoliang2-=0.05;
          }else if(that.guoliang2>=0.8){
            that.gzt2=0;
          }else if(that.guoliang2<=0.3){
            that.gzt2=1;
          };
          if(that.gzt3===1&&that.guoliang3<0.8){
            that.guoliang3+=0.05;
          }else if(that.gzt3===0&&that.guoliang3>0.3){
            that.guoliang3-=0.05;
          }else if(that.guoliang3>=0.8){
            that.gzt3=0;
          }else if(that.guoliang3<=0.3){
            that.gzt3=1;
          };
          if(that.gzt4===1&&that.guoliang4<0.8){
            that.guoliang4+=0.05;
          }else if(that.gzt4===0&&that.guoliang4>0.3){
            that.guoliang4-=0.05;
          }else if(that.guoliang4>=0.8){
            that.gzt4=0;
          }else if(that.guoliang4<=0.3){
            that.gzt4=1;
          };
          if(that.gzt5===1&&that.guoliang5<0.8){
            that.guoliang5+=0.05;
          }else if(that.gzt5===0&&that.guoliang5>0.3){
            that.guoliang5-=0.05;
          }else if(that.guoliang5>=0.8){
            that.gzt5=0;
          }else if(that.guoliang5<=0.3){
            that.gzt5=1;
          };
          if(that.gzt6===1&&that.guoliang6<0.8){
            that.guoliang6+=0.05;
          }else if(that.gzt6===0&&that.guoliang6>0.3){
            that.guoliang6-=0.05;
          }else if(that.guoliang6>=0.8){
            that.gzt6=0;
          }else if(that.guoliang6<=0.3){
            that.gzt6=1;
          };
          if(that.gzt7===1&&that.guoliang7<0.8){
            that.guoliang7+=0.05;
          }else if(that.gzt7===0&&that.guoliang7>0.3){
            that.guoliang7-=0.05;
          }else if(that.guoliang7>=0.8){
            that.gzt7=0;
          }else if(that.guoliang7<=0.3){
            that.gzt7=1;
          };
          if(that.gzt8===1&&that.guoliang8<0.8){
            that.guoliang8+=0.05;
          }else if(that.gzt8===0&&that.guoliang8>0.3){
            that.guoliang8-=0.05;
          }else if(that.guoliang8>=0.8){
            that.gzt8=0;
          }else if(that.guoliang8<=0.3){
            that.gzt8=1;
          };
        }, 100)
      },
      replay:function(){
        var that=this;
        clearInterval(that.guodh);
        clearInterval(that.chongdh);
        that.guoshow=false;
        that.guoliang1=0.3;
        that.guoliang2=0.7;
        that.guoliang3=0.5;
        that.guoliang4=0.4;
        that.guoliang5=0.7;
        that.guoliang6=0.3;
        that.guoliang7=0.6;
        that.guoliang8=0.4;
        that.gzt1=1;
        that.gzt2=1;
        that.gzt3=1;
        that.gzt4=1;
        that.gzt5=1;
        that.gzt6=1;
        that.gzt7=1;
        that.gzt8=1;
        that.show4=false;
        that.show1=true;
        that.chongshow=false;
        that.chongs=[
          {
            top:100,
            left:90,
            opa:0.5,
            czt:1
          },
          {
            top:300,
            left:650,
            opa:0.6,
            czt:1
          },
          {
            top:200,
            left:780,
            opa:0.7,
            czt:1
          },
          {
            top:60,
            left:820,
            opa:0.8,
            czt:1
          },
          {
            top:30,
            left:610,
            opa:0.9,
            czt:1
          },
          {
            top:60,
            left:330,
            opa:0.8,
            czt:1
          },
          {
            top:200,
            left:380,
            opa:0.7,
            czt:1
          },
          {
            top:230,
            left:500,
            opa:0.6,
            czt:1
          },
          {
            top:340,
            left:430,
            opa:0.5,
            czt:1
          },
          {
            top:200,
            left:210,
            opa:0.6,
            czt:1
          },
          {
            top:300,
            left:110,
            opa:0.7,
            czt:1
          },
          {
            top:20,
            left:160,
            opa:0.8,
            czt:1
          },
          {
            top:280,
            left:320,
            opa:0.9,
            czt:1
          },
          {
            top:210,
            left:30,
            opa:0.8,
            czt:1
          },
          {
            top:150,
            left:450,
            opa:0.7,
            czt:1
          },
          {
            top:320,
            left:800,
            opa:0.6,
            czt:1
          }
        ];
      }
    },
    mounted(){
      var that=this;
      setTimeout(function(){
        that.guostart();
      }, 1000);
      setTimeout(function(){
        that.chongstart();
      }, 3000);
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
    z-index: 0;
    position: relative;
  }
  .zhen{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
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
  .z4d1{
    bottom: 0;
    width: 14%;
    height: 3.75rem;
    left: 43%;
    background-color: #367000;
    position: absolute;
  }
  .z4d2{
    bottom: 0;
    width: 45.5%;
    height: 3.75rem;
    left: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 0 1.875rem 0;
  }
  .z4d3{
    bottom: 0;
    width: 45.5%;
    height: 3.75rem;
    right: 0;
    background-color: #000000;
    position: absolute;
    border-radius: 0 0 0 1.875rem;
  }
  .z4d4{
    bottom: 3.75rem;
    width: 9%;
    height: 6.25rem;
    left: 45.5%;
    background-color: #367000;
    position: absolute;
  }
  .z4d5{
    bottom: 10rem;
    width: 7%;
    height: 3.125rem;
    left: 45.5%;
    background-color: #367000;
    position: absolute;
  }
  .z4d6{
    bottom: 13.125rem;
    width: 5%;
    height: 3.125rem;
    left: 47.5%;
    background-color: #367000;
    position: absolute;
  }
  .z4d7{
    bottom: 15.625rem;
    width: 3%;
    height: 3.125rem;
    left: 48.5%;
    background-color: #367000;
    position: absolute;
  }
  .z4d8{
    bottom: 18.75rem;
    position: absolute;
    width: 51.5%;
    height: 2.5rem;
    background-color: #367000;
    border-radius: 0 1.875rem 0 0;
  }
  .z4d9{
    bottom: 18.75rem;
    position: absolute;
    width: 48.5%;
    height: 2.5rem;
    background-color: #000000;
    border-radius: 0 1.75rem 0 0;
  }
  .z4d10{
    bottom: 18.75rem;
    right: 0;
    position: absolute;
    width: 50%;
    height: 1.875rem;
    background-color: #367000;
    border-radius: 1.875rem 0 0 0;
  }
  .z4d11{
    bottom: 18.75rem;
    right: 0;
    position: absolute;
    width: 48.5%;
    height: 1.875rem;
    background-color: #000000;
    border-radius: 1.75rem 0 0 0;
  }
  .z4d12{
    top: 55%;
    width: 1.5625rem;
    height: 1.5625rem;
    left: 51.8%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 1.25rem;
    transform: rotate(90deg);
  }
  .z4d13{
    top: 51.3%;
    width: 3.75rem;
    height: 4.375rem;
    left: 54.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
  }
  .z4d14{
    width: 1.25rem;
    height: 0.9375rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
    position: absolute;
  }
  .z4d15{
    top: 39%;
    width: 3.75rem;
    height: 3.4375rem;
    left: 56.65%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z4d16{
    width: 1.25rem;
    height: 1.875rem;
    right: 0;
    bottom: 0;
    background-color: #000000;
    border-radius: 100% 0 0 0;
    position: absolute;
  }
  .z4d17{
    top: 34%;
    width: 2.5rem;
    height: 2.8125rem;
    left: 63.2%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
  }
  .z4d18{
    width: 1.5625rem;
    height: 1.25rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
    position: absolute;
  }
  .z4d19{
    top: 27.8%;
    width: 1.875rem;
    height: 1.5625rem;
    left: 65.9%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z4d20{
    width: 0.9375rem;
    height: 1.5625rem;
    background-color: #000000;
    border-radius: 100% 0 0 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .z4d21{
    top: 45%;
    width: 1.5625rem;
    height: 1.5625rem;
    left: 45.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d22{
    top: 41.3%;
    width: 3.125rem;
    height: 3.75rem;
    left: 40.1%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d23{
    width: 1.25rem;
    height: 0.9375rem;
    right: 0;
    background-color: #000000;
    border-radius: 0 0 0 100%;
    position: absolute;
  }
  .z4d24{
    top: 32%;
    width: 3.125rem;
    height: 2.5rem;
    left: 37.9%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d25{
    width: 1.25rem;
    height: 1.25rem;
    bottom: 0;
    background-color: #000000;
    border-radius: 0 100% 0 0;
    position: absolute;
  }
  .z4d26{
    top: 27%;
    width: 1.875rem;
    height: 2.5rem;
    left: 35%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d27{
    width: 1.875rem;
    height: 1.25rem;
    right: 0;
    background-color: #000000;
    border-radius: 0 0 0 100%;
    position: absolute;
  }
  .z4d28{
    top: 49%;
    width: 2.5rem;
    height: 1.25rem;
    left: 38.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d29{
    top: 44%;
    width: 1.5rem;
    height: 1.25rem;
    left: 38.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d30{
    top: 41.5%;
    width: 3.75rem;
    height: 2.1875rem;
    left: 32.1%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d31{
    width: 2.5rem;
    height: 0.625rem;
    right: 0;
    background-color: #000000;
    border-radius: 0 0 0 100%;
    position: absolute;
  }
  .z4d32{
    top: 34%;
    width: 3.75rem;
    height: 1.875rem;
    left: 27.7%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d33{
    width: 2.5rem;
    height: 1.25rem;
    bottom: 0;
    background-color: #000000;
    border-radius: 0 100% 0 0;
    position: absolute;
  }
  .z4d34{
    top: 29%;
    width: 1.875rem;
    height: 1.875rem;
    left: 24.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d35{
    width: 1.875rem;
    height: 1.25rem;
    right: 0;
    background-color: #000000;
    border-radius: 0 0 0 100%;
    position: absolute;
  }
  .z4d36{
    top: 30%;
    width: 0.625rem;
    height: 1.25rem;
    left: 47.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d37{
    top: 26%;
    width: 2.1875rem;
    height: 1.875rem;
    left: 43.8%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 0 100%;
    transform: rotate(0deg);
  }
  .z4d38{
    width: 1.5625rem;
    height: 1rem;
    right: 0;
    background-color: #000000;
    border-radius: 0 0 0 100%;
    position: absolute;
  }
  .z4d39{
    top: 21%;
    width: 2.5rem;
    height: 1.25rem;
    left: 40.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 100% 0 0;
    transform: rotate(0deg);
  }
  .z4d40{
    width: 1.875rem;
    height: 1.25rem;
    bottom: 0;
    background-color: #000000;
    border-radius: 0 100% 0 0;
    position: absolute;
  }
  .z4d41{
    top: 28.8%;
    width: 0.9375rem;
    height: 1.875rem;
    left: 50.9%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z4d42{
    top: 25%;
    width: 3.125rem;
    height: 2.5rem;
    left: 52.5%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
  }
  .z4d43{
    width: 2.1875rem;
    height: 0.9375rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
    position: absolute;
  }
  .z4d44{
    top: 22%;
    width: 0.9375rem;
    height: 0.9375rem;
    left: 56.3%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z4d45{
    top: 19.6%;
    width: 1.875rem;
    height: 1.5625rem;
    left: 57.9%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
  }
  .z4d46{
    width: 1.875rem;
    height: 0.625rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
    position: absolute;
  }
  .z4d47{
    top: 33%;
    width: 3.75rem;
    height: 2.5rem;
    left: 65%;
    background-color: #367000;
    position: absolute;
    border-radius: 0 0 100% 0;
    transform: rotate(0deg);
    z-index: -1;
  }
  .z4d48{
    width: 3.125rem;
    height: 1.5625rem;
    background-color: #000000;
    border-radius: 0 0 100% 0;
    position: absolute;
  }
  .z4d49{
    top: 25.6%;
    width: 2.5rem;
    height: 1.875rem;
    left: 70.4%;
    background-color: #367000;
    position: absolute;
    border-radius: 100% 0 0 0;
    transform: rotate(0deg);
  }
  .z4d50{
    width: 1.875rem;
    height: 1.875rem;
    bottom: 0;
    right: 0;
    background-color: #000000;
    border-radius: 100% 0 0 0;
    position: absolute;
  }
  .z4d51{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 26%;
    left: 72.7%;
    transform: rotate(90deg);
  }
  .z4d52{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 31%;
    left: 72%;
    transform: rotate(95deg);
  }
  .z4d53{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 35%;
    left: 70.5%;
    transform: rotate(100deg);
  }
  .z4d54{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 38%;
    left: 68%;
    transform: rotate(110deg);
  }
  .z4d55{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 40%;
    left: 65%;
    transform: rotate(105deg);
  }
  .z4d56{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 42%;
    left: 62.8%;
    transform: rotate(100deg);
  }
  .z4d57{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 46%;
    left: 62%;
    transform: rotate(100deg);
  }
  .z4d58{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 50%;
    left: 61.5%;
    transform: rotate(120deg);
  }
  .z4d59{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 56%;
    left: 60.8%;
    transform: rotate(140deg);
  }
  .z4d60{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 60%;
    left: 59.5%;
    transform: rotate(156deg);
  }
  .z4d61{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 20%;
    left: 70%;
    transform: rotate(5deg);
  }
  .z4d62{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 27%;
    left: 68.5%;
    transform: rotate(5deg);
  }
  .z4d63{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 24.5%;
    left: 64%;
    transform: rotate(-25deg);
  }
  .z4d64{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 28%;
    left: 63%;
    transform: rotate(-30deg);
  }
  .z4d65{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 28.5%;
    left: 61%;
    transform: rotate(-15deg);
  }
  .z4d66{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 30%;
    left: 59%;
    transform: rotate(-30deg);
  }
  .z4d67{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 32%;
    left: 57%;
    transform: rotate(-25deg);
  }
  .z4d68{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 36%;
    left: 55.5%;
    transform: rotate(-25deg);
  }
  .z4d69{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 42%;
    left: 54.8%;
    transform: rotate(-20deg);
  }
  .z4d70{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 44.5%;
    left: 53.5%;
    transform: rotate(-35deg);
  }
  .z4d71{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 33%;
    left: 53%;
    transform: rotate(175deg);
  }
  .z4d72{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 21%;
    left: 59%;
    transform: rotate(105deg);
  }
  .z4d73{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 12%;
    left: 57.2%;
    transform: rotate(30deg);
  }
  .z4d74{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 16%;
    left: 55%;
    transform: rotate(10deg);
  }
  .z4d75{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 19%;
    left: 52.5%;
    transform: rotate(25deg);
  }
  .z4d76{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 7%;
    left: 51.2%;
    transform: rotate(5deg);
  }
  .z4d77{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 5%;
    left: 49.5%;
    transform: rotate(15deg);
  }
  .z4d78{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 4.5%;
    left: 47.5%;
    transform: rotate(-10deg);
  }
  .z4d79{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 53%;
    left: 42%;
    transform: rotate(-170deg);
  }
  .z4d80{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 52%;
    left: 40%;
    transform: rotate(-160deg);
  }
  .z4d81{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 50.5%;
    left: 38%;
    transform: rotate(-165deg);
  }
  .z4d82{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 48%;
    left: 36.5%;
    transform: rotate(-145deg);
  }
  .z4d83{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 47%;
    left: 34.5%;
    transform: rotate(-150deg);
  }
  .z4d84{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 46%;
    left: 32.5%;
    transform: rotate(-155deg);
  }
  .z4d85{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 43.5%;
    left: 31%;
    transform: rotate(-140deg);
  }
  .z4d86{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 39%;
    left: 29.5%;
    transform: rotate(-120deg);
  }
  .z4d87{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 35%;
    left: 28%;
    transform: rotate(-135deg);
  }
  .z4d88{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 33%;
    left: 25%;
    transform: rotate(-120deg);
  }
  .z4d89{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 35.5%;
    left: 37.2%;
    transform: rotate(-110deg);
  }
  .z4d90{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 33%;
    left: 35%;
    transform: rotate(30deg);
  }
  .z4d91{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 29%;
    left: 33%;
    transform: rotate(-115deg);
  }
  .z4d92{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 25%;
    left: 31%;
    transform: rotate(35deg);
  }
  .z4d93{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 23%;
    left: 28.5%;
    transform: rotate(10deg);
  }
  .z4d94{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 23%;
    left: 26.5%;
    transform: rotate(-15deg);
  }
  .z4d95{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 34.5%;
    left: 45%;
    transform: rotate(-10deg);
  }
  .z4d96{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 29%;
    left: 43%;
    transform: rotate(30deg);
  }
  .z4d97{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 25%;
    left: 41.5%;
    transform: rotate(-125deg);
  }
  .z4d98{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 20%;
    left: 40.8%;
    transform: rotate(-95deg);
  }
  .z4d99{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 22%;
    left: 37.2%;
    transform: rotate(-30deg);
  }
  .z4d100{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 19%;
    left: 46%;
    transform: rotate(-5deg);
  }
  .z4d101{
    position: absolute;
    width: 1rem;
    height: 3.125rem;
    top: 13.5%;
    left: 43.5%;
    transform: rotate(-5deg);
  }
  .guo1{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 26%;
    left: 23%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo2{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 23%;
    left: 33.5%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo3{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 17.8%;
    left: 39.5%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo4{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 11.5%;
    left: 44%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo5{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 14%;
    left: 53.3%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo6{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 16%;
    left: 60%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo7{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 24%;
    left: 67.5%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .guo8{
    position: absolute;
    background-image: radial-gradient(#1500ff,#000000);
    width: 1.5625rem;
    height: 1.5625rem;
    top: 22%;
    left: 73%;
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .hz-enter-active, .hz-leave-active{
    transition: all 3s;
  }
  .hz-enter, .hz-leave-to{
    opacity: 0;
  }
  .chong{
    position: absolute;
    width: 0.3125rem;
    height: 0.3125rem;
    border-radius: 100%;
    background-image: radial-gradient(#ff6a00,#8c3a00);
    z-index: 10;
    box-shadow: 0 0 5px 5px #8c3a00;
  }
</style>
