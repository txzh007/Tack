<template>
  <!--<transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >-->
  <div class="add_pan">
    <div @click="closeHandler()" class="icon">
      <i class="el-icon-close"></i>
    </div>
    <el-form ref="form" :model="item" inline label-width="100px" :rules="rules">
      <el-form-item
        v-for="(items,index) in fieldList"
        :key="index"
        v-if="items.title!=='equipcode'"
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
          :critical="items.critical"
          @changeValue="changeValue"
          v-model="item[items.key]"
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
      <el-form-item style="width:calc(100% - 130px); text-align:center; margin">
        <el-button type="primary" @click="submitHandler()">{{$t('save')}}</el-button>
        <el-button type="ghost" @click="resetHandler()">{{$t('reset')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!--</transition>-->
</template>
<script>
import SelectView from '@/components/SelectView'
import { mapActions } from 'vuex'
import common from '@/utils/curd'
export default {
  name: 'vendorAdd',
  mixins: [common],
  props: {
    fields: {
      type: Object,
    },
    fieldList: {
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
    ...mapActions(['save', 'query']),
    changeValue(val) {
      const { obj } = val
      Object.assign(this.item, obj)
    },
    submitHandler() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.save({
            url: `/${this.route.name}/save`,
            param: this.item,
            context: this,
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
        }
      })
    },
    selectDate(key, val) {
      this.item[key] = val
    },
    resetHandler() {
      this.$refs['form'].resetFields()
    },
    closeHandler() {
      this.$store.state.vendor.isAdd = false
    },
  },
  watch: {
    $route(to, from) {
      this.rules = this.getRules(to.name)
      this.$refs['form'].resetFields()
    },
  },
  created() {
    if (this.$route.name === 'mdItem') {
      this.item.isequiipment = '0'
    }
  },
}
</script>
<style lang="scss" scoped>
</style>

