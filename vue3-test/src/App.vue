<template>
  <h1
  :class="{ active : isActive }" 
  @click="activate">
  Hello? {{ isActive }}
  </h1>
</template>

<script>
export default {
  data(){
    return {
      isActive : false
    }
  },
  methods : {
    activate(){
      this.isActive = true
    }
  }
}
</script>

<style>
  .active {
    font-size : 40px;
    color : red;
  }
</style>