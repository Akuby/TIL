<template>
  Child : {{ msg.value }}
</template>

<script>
export default {
  inject : [
    'msg'
  ]
}
</script>