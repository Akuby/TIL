<template>
  <MyBtn
  @akuby="log"
  @change-msg="logMsg"
  >Banana</MyBtn>

</template>

<script>
  import MyBtn from '~/components/MyBtn'
  export default {
    components : {
      MyBtn
    },
    methods:{
      log(){
        console.log('Click!!')
      },
      logMsg(msg){
        console.log(msg)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>>