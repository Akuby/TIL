<template>
<div
  class="ansc"
  @click.capture.stop="handlerA">
  <div
  class="parent"
  @click="handlerB">
    <div
     class="child"
     @click="handlerC"></div>
  </div>
</div>
</template> 

<script>
export default {
  methods : {
    handlerA() {
      console.log('ansc')
    },
    handlerB() {
      console.log('parent')
    },
    handlerC() {
      console.log('child')
    }
  }

}
</script>

<style lang="scss" scoped>
.ansc{
  width: 300px;
  height: 150px;
  background-color: pink;
  margin: 10px;
  padding: 10px;
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
}
</style>>
