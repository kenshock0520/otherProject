<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: blue;
}
</style>
