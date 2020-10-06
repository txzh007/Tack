<template>
  <div class="add_pan">
    <div @click="closeHandler()" class="icon">
      <i class="el-icon-close"></i>
    </div>
    <!--主表-->
    <el-form ref="form" :model="item" inline label-width="100px" :rules="rules">
      <el-form-item
        v-for="(items,index) in fieldList"
        :key="index"
        :label="$t(items.title)"
        :prop="items.key"
      >
        <el-input
          v-model="item[items.key]"
          v-if="items.type===1"
          :style="item.title==='v_typename'?{width:200+'px'}:{width:200+'px'}"
        ></el-input>
        <selectView
          :keys="items.key"
          v-if="items.type===2"
          :url="items.url"
          v-model="item[items.key]"
          :critical="items.critical"
          @changeValue="changeValue"
          :style="{width:items.width+'px'}"
        ></selectView>
        <el-date-picker
          type="date"
          v-if="items.type===5"
          v-model="item[items.key]"
          format="yyyy-MM-dd"
          :style="{width:items.width+'px'}"
          @change="selectDate(items.key,$event)"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <div style="width:calc(100% - 130px); text-align:center; margin:1rem 0">
      <el-button type="primary" @click="submitHandler()">{{$t('save')}}</el-button>
      <el-button type="ghost" @click="resetHandler()">{{$t('cancel')}}</el-button>
    </div>
  </div>
  <!--</transition>-->
</template>

<script>
import SelectView from '@/components/SelectView'
import { mapActions, mapGetters } from 'vuex'
import common from '@/utils/curd'
export default {
  name: 'vendorEdit',
  mixins: [common],
  props: {
    fields: {
      type: Object,
    },
    fieldList: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  components: {
    SelectView,
  },
  data() {
    return {
      item: Object.assign({}, this.fields),
    }
  },
  methods: {
    ...mapActions(['query']),
    changeValue(val) {
      const { obj } = val
      Object.assign(this.item, obj)
    },
    submitHandler() {
      console.log('item', this.item)
      this.$refs['form'].validate(valid => {
        delete this.item.createdon
        delete this.item.modifiedon

        if (this.item.manufacturedate) {
          this.item.manufacturedate = this.formatTime(this.item.manufacturedate)
        }

        if (valid) {
          this.$post({
            url: `/${this.route.name}/save`,
            params: this.item,
          }).then(res => {
            if (this.$route.name === 'mdVessel') {
              this.query({
                url: `/${this.$route.name}/viewMdVesselAndCust`,
                param: { page: 1, rows: 20 },
                context: this,
              })
            } else {
              this.query({
                url: `apRequestPay/queryList`,
                param: { page: 1, rows: 20 },
                context: this,
              })
            }
          })
          this.$store.state.vendor.isEdit = this.isError
        }
      })
    },
    formatTime(time) {
      let unixtime = time
      let unixTimestamp = new Date(unixtime)
      let Y = unixTimestamp.getFullYear()
      let M =
        unixTimestamp.getMonth() + 1 > 10
          ? unixTimestamp.getMonth() + 1
          : '0' + (unixTimestamp.getMonth() + 1)
      let D =
        unixTimestamp.getDate() > 10
          ? unixTimestamp.getDate()
          : '0' + unixTimestamp.getDate()
      let toDay = Y + '-' + M + '-' + D
      return toDay
    },
    resetHandler() {
      this.$store.state.vendor.isEdit = false
    },
    closeHandler() {
      this.$store.state.vendor.isEdit = false
    },
    selectDate(key, val) {
      this.item[key] = val
    },
  },
  watch: {
    $route(to, from) {
      this.rules = this.getRules(to.name)
      this.$refs['form'].resetFields()
    },
  },
  computed: {
    ...mapGetters(['isError']),
  },
  created() {
    console.log(this.fields)
  },
}
</script>

<style lang="scss" scoped>
</style>

