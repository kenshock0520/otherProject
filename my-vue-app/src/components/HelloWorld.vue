<template>
  <div class="hello">
    <Header :msg="headerMsg"></Header>
    <b-button
      size="lg"
      variant="outline-primary">
      Bootstrap Button
    </b-button>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      headerMsg: 'メインページです。'
    }
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
