<template>
  <div class="add_pan">
    <div @click="closeHandler()" class="icon">
      <i class="el-icon-close"></i>
    </div>
    <el-tabs type="card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 本次申请
        </span>
        <el-form :model="editForm" inline label-width="200px" ref="editForm" align="left">
          <el-form-item :label="$t("applythispay")" prop="amount">
            <el-input v-model="editForm.amount" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item :label="$t("invoiceno")" prop="invoiceno">
            <el-input v-model="editForm.invoiceno" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item :label="$t("invoicetypeid")" prop="invoicetypeid">
            <template>
              <selectView
                keys="invoicetypeid"
                v-model="editForm.invoicename"
                style="width:192px"
                url="mdInvoiceType/view"
                :isDisable="true"
              ></selectView>
            </template>
          </el-form-item>
          <el-form-item :label="$t("taxrate")" prop="taxrate">
            <el-input v-model="editForm.taxrate" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item :label="$t("invoiceurl")" prop="invoiceurl">
            <img
              :src="'file/get/'+editForm.invoiceurl"
              @click="showImg()"
              v-if="editForm.invoiceurl"
              class="minImg"
            />
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <transition name="slide-fade" class="fadeView">
        <div v-if="show">
          <image-view
            :imgArr="['file/get/'+editForm.invoiceurl ]"
            :showImageView="true"
            v-on:hideImage="closeImg()"
          ></image-view>
        </div>
      </transition>
    </el-tabs>

    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="el-icon-date"></i> 采购订单
        </template>
        <!--主表-->
        <el-form
          ref="form"
          :model="item"
          inline
          label-width="100px"
          :rules="rules"
          style="padding-left:.5rem"
        >
          <el-form-item :key="deliveryno" :label="$t("deliveryno")" :prop="deliveryno">
            <span v-text="item.deliveryno" class="text"></span>
          </el-form-item>
          <el-form-item :key="refno" :label="$t("refno")" :prop="refno">
            <span v-text="item.refno" class="text"></span>
          </el-form-item>
          <!-- <el-form-item  :key="title" :label='$t("title")' :prop='title'>
            <span v-text="item.title" class="text"></span>
          </el-form-item>-->
          <el-form-item :key="vesselname" :label="$t("vesselname")" :prop="vesselname">
            <span v-text="item.vesselname" class="text"></span>
          </el-form-item>
          <el-form-item :key="equipname" :label="$t("equipname")" :prop="equipname">
            <span v-text="item.equipname" class="text"></span>
          </el-form-item>
          <el-form-item :key="portname" :label="$t("sale_portname")" :prop="portname">
            <span v-text="item.portname" class="text"></span>
          </el-form-item>
          <el-form-item :key="expectdate" :label="$t("sale_expectdate")" :prop="expectdate">
            <span v-text="item.expectdate" class="text"></span>
          </el-form-item>
          <el-form-item :key="deliverydate" :label="$t("sale_expectdate")" :prop="deliverydate">
            <span v-text="item.deliverydate" class="text"></span>
          </el-form-item>
          <el-form-item :key="deliveryaddr" :label="$t("deliveryaddr")" :prop="deliveryaddr">
            <span v-text="item.deliveryaddr" class="text"></span>
          </el-form-item>
        </el-form>
        <!--细表-->
        <el-table fit :data="detailList" border highlight-current-row>
          <el-table-column :label="$t("packageno")" align="center" prop="packageno"></el-table-column>

          <el-table-column :label="$t("packagename")" align="center" prop="packagename"></el-table-column>
          <el-table-column :label="$t("plength")" align="center" prop="plength"></el-table-column>
          <el-table-column :label="$t("pwidth")" align="center" prop="pwidth"></el-table-column>
          <el-table-column :label="$t("pheight")" align="center" prop="pheight"></el-table-column>
          <el-table-column :label="$t("grossweight")" align="center" prop="grossweight"></el-table-column>
          <el-table-column :label="$t("newweight")" align="center" prop="newweight"></el-table-column>

          <el-table-column :label="$t("packagegoods")" align="center" prop="count">
            <template slot-scope="scope">
              <div id="app">
                <el-popover ref="popover4" placement="left" width="500" trigger="click">
                  <el-table :data="gridData" border highlight-current-row>
                    <el-table-column width="70" type="index" :label="$t("No")" align="center"></el-table-column>
                    <el-table-column
                      width="180"
                      sortable
                      prop="itemname"
                      :label="$t("itemname")"
                      align="center"
                    ></el-table-column>
                    <el-table-column width="100" prop="qty" :label="$t("pack_qty")" align="center"></el-table-column>
                    <el-table-column width="100" prop="price" :label="$t("price")" align="center"></el-table-column>
                    <el-table-column width="100" prop="amt" :label="$t("amount")" align="center"></el-table-column>
                  </el-table>
                </el-popover>
                <el-button
                  @click="clickHandler(scope.$index,scope.row)"
                  v-popover:popover4
                  type="text"
                  size="large"
                >{{$t('view')}}</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <div style="width:calc(100%); text-align:center; margin:1rem 0">
      <el-button type="primary" @click="submitHandler()">{{$t('confirm')}}</el-button>
      <!--<el-button type="ghost" @click='resetHandler()'>{{$t('cancel')}}</el-button>-->
    </div>
  </div>

  <!--</transition>-->
</template>

<script>
import SelectView from '@/components/SelectView'
import common from '@/utils/curd'

export default {
  name: 'view',
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
    payList: {
      type: Array,
    },
    applyData: {
      type: Object,
    },
  },
  components: {
    SelectView,
  },
  data() {
    return {
      dialogVisible: false,
      activeNames: ['1'],
      item: {},
      detailList: [],
      detailItem: {},
      editForm: {},
      show: false,
      gridData: [],
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    showImg() {
      this.show = true
    },
    closeImg() {
      this.show = false
    },
    submitHandler() {
      this.$store.state.vendor.isView = false
    },
    closeHandler() {
      this.$store.state.vendor.isView = false
    },
    clickHandler(index, row) {
      this.$post('/sdDelivery/getByPackId', { id: row.packageid }).then( res => {
        this.gridData = res.data.data.list
        console.log('girdData', this.gridData)
        // console.log('popover4', this.$popover4)
      })
    },
  },
  created() {
    console.log('data', this.$store.state.vendor.dataInfo)
    let tableData = this.$store.state.vendor.dataInfo
    console.log('tableData', tableData)
    this.editForm = tableData.apRequest
    this.detailList = tableData.detailDataList
    this.item = tableData.mainData
    console.log('editForm', this.editForm)
  },
  watch: {
    $route(to, from) {
      this.rules = this.getRules(to.name)
      this.$refs['form'].resetFields()
      this.detailColumns = this.getAddForm(`${to.name}Detail`)
      this.getObj(this.detailColumns)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

