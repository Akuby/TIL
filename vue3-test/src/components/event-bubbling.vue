<template>
<div
  class="parent"
  @click="handlerA">
  <div
    class="child"
    @click="handlerB"></div>
</div>
</template>

<script>
export default {
  methods : {
    handlerA() {
      console.log('A')
    },
    handlerB(event) {
      event.stopPropagation()
      console.log('B')
    }
  }

}
</script>

<style lang="scss" scoped>
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    .child{
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  }
</style>>
