<template>
  <div @click="goerror" class="error">
    index
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goerror:function(){
        this.$router.push('error')
      }
    }
  }
</script>

<style>
  .error{
    cursor: pointer;
  }
</style>
