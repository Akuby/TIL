<template>
<button @click="handler('hi', $event)">Click 1</button>
<button @click="handler('what', $event)">Click 2</button>
<button @click="handlerA(), handlerB()">A, B</button>
</template>

<script>
export default {
  methods : {
    handler(msg, event) {
      console.log(msg)
      console.log(event.target)
    },
    handlerA(){
      console.log('A')
    },
    handlerB(){
      console.log('B')
    }
  }

}
</script>

<style>

</style>