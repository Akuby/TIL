<template>
  <button @click="push">click!!</button>
  <h1>App : {{ message }}</h1>
  <Parent />
</template>

<script>
  import Parent from "~/components/Parent"
  import { computed } from 'vue'

  export default {
    components : {
      Parent
    },
    data(){
      return {
        message : "Hello World!"
      }
    },
    provide() {
      return {
        msg : computed(()=>{
          return this.message
        })
      }
    },
    methods : {
      push(){
        this.message = 'Good!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>>