<template>
  <div>
    <b-modal ref="thisModalRef" size="lg" hide-header hide-footer no-close-on-backdrop hide-header-close>
      <div :is="component"></div>
      <b-button @click="hideModal">hide modal</b-button>
    </b-modal>
  </div>
</template>

<script>
import ChildModal1 from './ChildModal1'
import ChildModal2 from './ChildModal2'
import ChildModal3 from './ChildModal3'
export default {
  data () {
    return {
      component: ''
    }
  },
  components: {
    ChildModal1,
    ChildModal2,
    ChildModal3
  },
  methods: {
    hideModal () {
      this.$refs.thisModalRef.hide()
    },
    showModal1 () {
      this.component = ChildModal1
      this.$refs.thisModalRef.show()
    },
    showModal2 () {
      this.component = ChildModal2
      this.$refs.thisModalRef.show()
    },
    showModal3 () {
      this.component = ChildModal3
      this.$refs.thisModalRef.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
