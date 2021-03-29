<template>
  <el-select
    style="min-width:10rem;"
    filterable
    clearable
    :multiple="isMultiple"
    @change="changeHandler"
    @visible-change="visibleChange"
    @clear="changeHandler"
    :allow-create="allowCreate"
    :no-data-text="noDataText"
    v-model="item"
    :style="{width: width.width,minWidth:0}"
    :disabled="isDisable"
  >
    <el-option
      :value="getValue(item)"
      :key="index"
      :label="getLabel(item)"
      :disabled="item.disabled"
      v-for="(item, index) in options"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'selectView',
  props: {
    url: {
      type: String,
      default: '',
    },
    allowCreate: {
      type: Boolean,
      default: false,
    },
    noDataText: {
      type: String,
      default: '无数据',
    },
    critical: {
      type: String,
      default: '',
    },
    params: {
      type: Object,
      default: () => {
        return {}
      },
    },
    keys: {
      type: String,
      default: '',
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Object,
      default: () => {
        return {
          width: '100%',
        }
      },
    },

    value: {
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      item: this.isMultiple ? [] : this.value,
      options: [],
    }
  },
  methods: {
    changeHandler(item) {
      //  console.log('keys', this.keys, item)
      const keys = this.keys
      console.log('changeHandler')
      let obj = {}
      obj[keys] = item
      const select = this.options.filter(it => {
        return it.id === item
      })[0]
      if (select !== undefined) {
        this.$emit('changeValue', { obj, select })
      } else {
        const create = { type: 'create' }
        this.$emit('changeValue', { obj, create })
      }
    },
    visibleChange(val) {
      this.$emit('visibleChange', val)
    },
    // 获select的label,由于库定义的字段不同,故在此用函数返回 getValue同理
    getLabel(item) {
      if (this.critical !== '' && typeof this.critical !== 'undefined') {
        let name = ''
        let keys = this.critical.split(',')

        for (let key of keys) {
          name = name !== '' ? name + ' ' : name
          name += item[key]
        }
        return name
      }
      return (
        item.vendorname ||
        item.itemname ||
        item.customername ||
        item.vesselname ||
        item.currencyname ||
        item.taxname ||
        item.codeName ||
        item.carriername ||
        item.equipname ||
        item.uomname ||
        item.paytermname ||
        item.typename ||
        item.bomname ||
        item.areaname ||
        item.brandname ||
        item.ccsname ||
        item.countrytype ||
        item.manufacturename ||
        item.invoicename ||
        item.codeName ||
        item.majorname
      )
    },
    getValue(item) {
      // console.log('selectitem', item)
      if (!item.id && !item.codeValue) {
        return item
      }
      return item.id || item.codeValue
    },
  },
  created() {
    this.$nextTick(() => {
      if (this.url.length === 0) {
        // this.options = [{ codeValue: '0', label: '否' }, { codeValue: '1', label: '是' }]
        return
      }
      const url = `/${this.url}`
      this.$get(url, this.params).then(res => {
        this.options = res.data.data.list || res.data.data
        // console.log('dataselect', this.options)
      })
    })
  },
  watch: {
    url(val) {
      this.$get(`/${val}`, this.params).then(res => {
        this.options = res.data.data.list || res.data.data
        // console.log('op', this.options)
      })
    },
  },
}
</script>
