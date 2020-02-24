<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{column.header}}
            <span v-if="column.copy">
              <a @click="doCopy(column.copy)">コピー</a>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in items" :key="index">
              <td v-for="(column, indexColumn) in columns" :key="indexColumn">
                <span v-if="typeof item[column.header] === 'object'">
                    <ul>
                      <li v-for="(data, indexColumn) in item[column.header]" :key="indexColumn">
                        <a @click="triggerAction(data.action)">
                          {{data.text}}
                        </a>
                      </li>
                    </ul>
                </span>
                <span v-else>
                  {{item[column.header]}}
                </span>
              </td>
          </tr>
      </tbody>
    </table>
    <AppModal ref="modalRef"></AppModal>
  </div>
</template>

<script>
import AppModal from './ParentModal'

export default {
  props: ['columns', 'items'],
  components: {
    AppModal
  },
  methods: {
    triggerAction (action) {
      console.log('triggerAction:' + action)
      if (action === 'showModal1') {
        this.showModal1()
      } else if (action === 'showModal2') {
        this.showModal2()
      } else if (action === 'showModal3') {
        this.showModal3()
      }
    },
    showModal1 () {
      console.log('Action:showModal1')
      this.$refs.modalRef.showModal1()
    },
    showModal2 () {
      console.log('Action:showModal2')
      this.$refs.modalRef.showModal2()
    },
    showModal3 () {
      console.log('Action:showModal3')
      this.$refs.modalRef.showModal3()
    },
    doCopy (column) {
      console.log('column:' + column)
      console.log('column:' + this.items)
      const filter = this.items.filter(function (item) {
        return item[column]
      }).map(function (item) {
        return item[column]
      })
      console.log('column:' + filter)
      alert(filter)
      // クリップボードにコピー実行
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
  cursor: pointer;
}
</style>
