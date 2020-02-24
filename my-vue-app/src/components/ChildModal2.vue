<template>
  <div>
    <b-table-simple hover small caption-top responsive>
      <b-tbody>
        <b-tr>
          <b-th rowspan="3">ChildModal2</b-th>
          <b-th class="text-left">Antwerp</b-th>
          <b-td>56</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-left">Gent</b-th>
          <b-td>46</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-left">Brussels</b-th>
          <b-td>51</b-td>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
