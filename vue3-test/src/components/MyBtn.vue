<template>
  <div
  :style="{ 'background-color' : color}"
  :class="{ large }"
  class="btn">
  <slot></slot></div>
</template>

<script>
export default {
  props:{
    color: {
      type:String,
      default:'gray'
    },
    large : {
      type: Boolean,
      default : false
    }
  }
}
</script>

<style scoped lang="scss">
  .btn{
    margin: 4px;
    padding: 12px 24px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    &.large{
      font-size: 30px;
      padding : 15px 27px
    }
  }
</style>