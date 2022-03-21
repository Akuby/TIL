<template>
<div class="btn"
><slot></slot></div>
<h1 @click="$emit('akuby')" class="btn">I'm h1</h1>
<input type="text" v-model="msg">
</template>

<script>
export default {
  emits : [
    'akuby',
    'changeMsg'
  ],
  data(){
    return{
      msg:''
    }
  },
  watch:{
    msg() {
      this.$emit('changeMsg', this.msg)
    }
  }
}
</script>

<style scoped lang="scss">
.btn{
  display: inline-block;
  background-color: rgb(248, 248, 167);
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>