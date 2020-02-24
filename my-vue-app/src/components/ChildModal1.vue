<template>
  <div>
    <b-table-simple hover small caption-top responsive>
      <b-tbody>
        <b-tr>
          <b-th rowspan="3">ChildModal1</b-th>
          <b-th class="text-left">id</b-th>
          <b-td>{{filterItems[0].id}}</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-left">name</b-th>
          <b-td>{{filterItems[0].name}}</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-left">value</b-th>
          <b-td>{{filterItems[0].value}}</b-td>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">The Netherlands</b-th>
          <b-th class="text-left">Amsterdam</b-th>
          <b-td variant="success">89</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-left">Utrecht</b-th>
          <b-td>80</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <PrevNext :page="page" :totalPage="totalPage" @change="onPageChange"/>
  </div>
</template>

<script>
import PrevNext from './PrevNext'
export default {
  data () {
    return {
      items: null,
      page: 1,
      perPage: 1
    }
  },
  components: {
    PrevNext
  },
  created () {
    this.items = [
      {'id': '1', 'name': 'itemName', 'value': 'aiueo'},
      {'id': '2', 'name': 'itemName2', 'value': 'aiueo2'}
    ]
    console.log('itemCol:' + this.items.length)
  },
  computed: {
    filterItems () {
      return this.items.filter(
        (item, i) =>
          i >= (this.page - 1) * this.perPage && i < this.page * this.perPage
      )
    },
    totalPage () {
      return Math.ceil(this.items.length / this.perPage)
    }
  },
  methods: {
    onPageChange (page) {
      this.page = page
      window.history.replaceState(
        { page },
        `Page${page}`,
        `${window.location.origin}/?page=${page}`
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
