<template>
  <PageView @edit="editRecord" @search="search">
    <Search slot="search" :param="param" @importData="importData" />
    <Add v-if="isAdd" slot="add" :fields="fields" :field-list="columns" />
    <Edit v-if="isEdit" slot="edit" :fields="eidtFields" :field-list="columns" />
    <ViewRecord v-if="isView" slot="view" :fields="eidtFields" :field-list="columns" />
  </PageView>
</template>

<script>
import PageView from './PageView'
import Add from './add'
import Search from './search'
import Edit from './edit'
import ViewRecord from './view'
import common from '@/utils/curd'
const { mapGetters } = Vuex
export default {
  name: 'MdVendor',
  components: {
    PageView,
    Search,
    Add,
    Edit,
    ViewRecord,
  },
  mixins: [common],
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
}
</script>
