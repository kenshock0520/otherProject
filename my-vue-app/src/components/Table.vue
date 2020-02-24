<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index"> {{column}}</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in items" :key="index">
              <td v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          'id': '1',
          'title': 'hello',
          'description': 'ok ok',
          'created_date': '2018-09-09'
        },
        {
          'id': '2',
          'title': 'hello 2',
          'description': 'ok ok 2',
          'created_date': '2018-10-09'
        }
      ],
      columns: ['id', 'name', 'title', 'description', 'created_date']
    }
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
