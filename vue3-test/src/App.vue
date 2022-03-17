<template>
  <h1
  :style="[myStyle, backgroundStyle]" 
  @click="changeStyle">
  Hello?
  </h1>
</template>

<script>
export default {
  data(){
    return {
      myStyle : {
        color : 'pink',
        'font-size' : '30px'
      },
      backgroundStyle : {
        'background-color' : 'black'
      }
    }
  },
  methods:{
    changeStyle() {
      this.myStyle['color'] = 'red',
      this.backgroundStyle['background-color'] = 'orange'
    }
  }
}
</script>

<style>

</style>