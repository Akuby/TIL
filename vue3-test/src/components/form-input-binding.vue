<template>
  <input 
  type="text" 
  @input="msg = $event.target.value">
  {{ msg }}
</template>

<script>
  export default {
    data(){
      return{
        "msg" : this.msg
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>>