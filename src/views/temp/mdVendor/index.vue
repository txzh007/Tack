<template>
  <PageView @edit="editRecord" @search="search">
    <Search slot="search" :param="param" @importData="importData"></Search>
    <Add slot="add" v-if="isAdd" :fields="fields" :fieldList="columns"></Add>
    <Edit slot="edit" v-if="isEdit" :fields="eidtFields" :fieldList="columns"></Edit>
    <ViewRecord slot="view" v-if="isView" :fields="eidtFields" :fieldList="columns"></ViewRecord>
  </PageView>
</template>

<script>
import PageView from './PageView'
import Add from './add'
import Search from './search'
import Edit from './edit'
import ViewRecord from './view'
import common from '@/utils/curd'
import { mapGetters } from 'vuex'
export default {
  name: 'mdVendor',
  mixins: [common],
  components: {
    PageView,
    Search,
    Add,
    Edit,
    ViewRecord,
  },
  data() {
    return {
      fields: {},
      eidtFields: {},
      param: { page: 1, rows: 20 },
    }
  },
  computed: {
    ...mapGetters(['isAdd', 'isUpdate', 'isEdit', 'isView']),
  },
  methods: {
    editRecord(val) {
      console.log(val)
      const { item, type } = val
      const { id, billid } = item
      this.$post(`apRequestPay/seeById`, { id: id, deliveryId: billid }).then(
        res => {
          const { data } = res.data
          console.log('index data', data)
          this.$store.state.vendor.dataInfo = data
          this.eidtFields.isequiipment === 0
            ? (this.eidtFields.isequiipment = '0')
            : (this.eidtFields.isequiipment = '1')
          type === 1
            ? (this.$store.state.vendor.isEdit = true)
            : (this.$store.state.vendor.isView = true)
        }
      )
    },
    search(val) {
      console.log(val)
      this.param = val
    },
    importData(data) {
      console.log(data)
    },
  },
  created() {
    console.log('this.columns', this.columns)

    // 过滤查找出需要增加的条件列
    this.columns = this.columns.filter(item => {
      return item.isAdd === 1
    })
    // 构建增加对象
    this.columns.forEach(item => {
      this.fields[item.key] = ''
    })
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
      const type = to.name
      // this.$route.name = type
      this.columns = this.getAddForm(type)
      this.columns = this.columns.filter(item => {
        return item.isAdd === 1
      })
      // 构建增加对象
      this.columns.forEach(item => {
        this.fields[item.key] = ''
      })
    },
  },
}
</script>
