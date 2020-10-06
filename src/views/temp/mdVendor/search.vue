<template>
  <div class="main">
    <div class="search_pan">
      <el-form inline ref="form" label-width="100px" v-model="obj">
        <el-form-item
          v-for="(item,index) in columns"
          :key="index"
          :label="$t(item.title)"
          :prop="item.key"
          v-if="index < 3"
        >
          <el-input
            v-model="obj[item.key]"
            v-if="item.type===1"
            :style="item.title==='v_typename'?{width:200+'px'}:{width:item.width+'px'}"
          ></el-input>
          <selectView
            :keys="item.key"
            v-if="item.type===2"
            :url="item.url"
            @changeValue="changeValue"
            :style="{width:item.width+'px'}"
          ></selectView>
          <el-date-picker
            type="date"
            v-if="item.type===5"
            v-model="obj[item.key]"
            format="yyyy-MM-dd"
            :style="{width:item.width+'px'}"
            @change="selectDate(item.key,$event)"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <i
        class="el-icon-d-arrow-left"
        v-if="columns.length > 3"
        @click="showMore"
        :class="[flag ? 'rotate_09': 'rotate_90']"
      ></i>
      <div class="btn_group">
        <el-button
          type="primary"
          icon="search"
          v-if="roles.includes('query')"
          @click="search"
        >{{this.$t('search')}}</el-button>
        <el-button
          v-if="type!=='puVendorHis'&&type!=='sdCustomerHis'"
          type="primary"
          icon="plus"
          @click="add"
          v-show="roles.includes('add')"
        >{{this.$t('add')}}</el-button>
        <!--<el-upload action='' :before-upload="beforeUpload" :http-request="upload" :show-file-list='false' style="margin: 0 10px">
        <el-button type="primary" icon="upload">{{this.$t('import')}}</el-button>
        </el-upload>-->
        <!--<el-button type="primary" icon='iconfont iconfont icon-daoru' @click='exportData'>{{this.$t('export')}}</el-button>-->
      </div>
    </div>
    <el-form inline ref="form" label-width="100px" v-model="obj">
      <el-form-item
        v-for="(item,index) in columns"
        :key="index"
        :label="$t(item.title)"
        :prop="item.key"
        v-if="index > 2 && flag"
      >
        <el-input v-model="obj[item.key]" v-if="item.type===1" :style="{width:item.width+'px'}"></el-input>
        <selectView
          :keys="item.key"
          v-if="item.type===2"
          :url="item.url"
          @changeValue="changeValue"
          :style="{width:items.width+'px'}"
        ></selectView>
        <el-date-picker
          type="date"
          v-if="item.type===5"
          v-model="obj[item.key]"
          format="yyyy-MM-dd"
          :style="{width:item.width+'px'}"
          @change="selectDate(item.key,$event)"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import common from '@/utils/curd'
import selectView from '@/components/SelectView'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'vendorSearch',
  mixins: [common],
  props: {
    param: {
      type: Object,
      default: () => {
        return { page: 1, rows: 20 }
      },
    },
  },
  components: {
    selectView,
  },
  data() {
    return {
      obj: {},
      type: '',
      flag: false,
    }
  },
  methods: {
    ...mapActions(['query']),
    showMore() {
      this.flag = !this.flag
    },
    search() {
      const param = Object.assign(this.obj, this.param)
      this.query({
        url: `/apRequestPay/queryDeliveryRequest`,
        param,
        context: this,
      })
    },
    add() {
      this.$store.state.vendor.isAdd = true
    },
    changeValue(val) {
      const { obj } = val
      Object.assign(this.obj, obj)
    },
    selectDate(key, val) {
      this.obj[key] = val
    },
    exportData() {
      this.$store.state.vendor.exportTable = true
    },
  },
  computed: {
    ...mapGetters(['roles']),
  },
  created() {
    // 过滤查找出需要查询的条件列
    this.columns = this.columns.filter(item => {
      return item.isSearch === 1
    })
    // 构建查询对象
    this.columns.forEach(item => {
      this.obj[item.key] = ''
    })
  },
  watch: {
    $route(to, from) {
      const type = to.name
      this.type = type
      this.columns = this.getAddForm(type)
      // 过滤查找出需要查询的条件列
      this.columns = this.columns.filter(item => {
        return item.isSearch === 1
      })
      // 构建查询对象
      this.columns.forEach(item => {
        this.obj[item.key] = ''
      })
    },
    param(val) {
      this.search()
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}
</style>
