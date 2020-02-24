<template>
  <div class="hello">
    <Header :msg="headerMsg"></Header>
    <b-button
      size="lg"
      variant="outline-primary">
      Bootstrap Button
    </b-button>
    <table-component :columns="columns" :items="items"></table-component>
  </div>
</template>

<script>
import Header from './Header'
import TableComponent from './TableComponent'
export default {
  data () {
    return {
      headerMsg: 'Page2です。',
      items: [
        {
          'id': '00000001',
          'name': 'test',
          'title': 'hello',
          'description': 'description1',
          'data': '',
          'created_date': '2018-09-09'
        },
        {
          'id': '000000002',
          'name': 'あいうえおかきくけこさしすせそ',
          'title': 'hello 2',
          'description': 'description2',
          'data': [
            {
              'text': 'googlegooglegooglegooglegooglegooglegoogle',
              'action': 'showModal1'
            },
            {
              'text': 'yahooyahooyahooyahooyahooyahooyahooyahooyahooyahoo',
              'action': 'showModal2'
            },
            {
              'text': 'hogehogehogehogehogehogehogehogehoge',
              'action': 'showModal3'
            }
          ],
          'created_date': '2018-10-09'
        }
      ],
      columns: [
        {'header': 'id'},
        {'header': 'name'},
        {'header': 'title'},
        {'header': 'description'},
        {'header': 'data', 'copy': 'description'},
        {'header': 'created_date'}
      ]
    }
  },
  components: {
    Header,
    TableComponent
  },
  methods: {
    showModal: function () {
      // this.$refs.modalRef.showModal()
      console.log('commentout')
    }
  },
  mounted () {
    this.showModal()
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
