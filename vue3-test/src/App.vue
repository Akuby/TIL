<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
  export default {
    data() {
      return{
        count : 0,
        message : 'Hello World!'
      }
    },
    computed:{
      doubleCount() {
        return this.count * 2
      },
      reversedMessage() {
        return this.message.split('').reverse().join('')
      }
    },
    watch:{
      message(newMessage) {
        console.log(newMessage)
      }
    },
    created(){
      console.log(this.message)
    },
    mounted(){
      console.log(this.count)
    },
    methods : {
      increase() {
        this.count += 1
      },
      changeMessage() {
        this.message = 'Good?!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>>