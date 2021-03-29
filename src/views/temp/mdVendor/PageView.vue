<template>
  <div class="main">
    <!--<div class="topImg">
            {{title}}
    </div>-->
    <div class="search">
      <slot v-if="!isAdd&&!isEdit&&!isView" name="search" />
      <slot name="add" />
      <slot name="edit" />
    </div>
    <div class="main_content">
      <aside v-if="false" />
      <div v-if="!isAdd&&!isEdit&&!isView" class="table_content">
        <el-table
          id="result"
          ref="table"
          size="small"
          fit
          border
          highight-current-row
          :data="data.list"
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" width="50" align="center" :label="$t('no')" fixed="left" />
          <span v-for="(item,$index) in columns" :key="$index">
            <el-table-column
              v-if="item.type === 'index'"
              type="index"
              width="50"
              align="center"
              label="No."
            />
            <el-table-column v-if="item.type === 'radio'" width="40" fixed="left">
              <template slot-scope="scope">
                <el-radio
                  v-model="select"
                  :label="scope.$index"
                  style="color:rgba(255,255,255,0);margin-left:10px"
                />
              </template>
            </el-table-column>

            <el-table-column
              v-if="item.flag === 1"
              resizable
              :prop="item.title"
              :label="$t(item.title)"
              :width="item.width"
              :sortable="item.sortable"
              align="center"
              :fixed="item.render?'right':false"
            >
              <template slot-scope="scope">
                <div v-if="item.render&&operation.type!==4">
                  <el-button
                    v-for="(operation,$i) in item.render"
                    v-show=" (operation.type===2 && roles.includes('view')) || (operation.type===3 && roles.includes('download'))"
                    :key="$i"
                    style="display:inline-block"
                    :disabled="scope.row.statuscn&&scope.row.status!==60&&operation.type!==2?true:false"
                    :type="operation.type===1?'info':((operation.type===2 || operation.type===3)?'primary':'danger')"
                    size="small"
                    @click="clickHandler(scope.$index,scope.row,operation.type)"
                  >{{ $t(operation.label) }}</el-button>
                </div>

                <div v-if="!item.render" v-text="scope.row[item.key]" />
              </template>
            </el-table-column>
          </span>
        </el-table>
        <div
          style="margin: .5rem .1rem;overflow: hidden;background:linear-gradient(#ffffff, #f4f4f4)"
        >
          <div style="float: right;margin-right:1rem;font-size:12px;">
            <el-pagination
              layout="total,sizes, prev, pager, next"
              :current-page="data.pageNum"
              :page-sizes="[10, 20, 30, 40,50]"
              :page-size="data.pageSize"
              :total="data.total"
              @size-change="changeSize"
              @current-change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/utils/curd'
const { mapActions, mapGetters } = Vuex
export default {
  name: 'PageView',
  mixins: [common],
  data() {
    return {
      data: [],
      type: '',
      text: '',
      pageSize: 20,
      select: '',
      currentRow: null,
    }
  },
  computed: {
    ...mapGetters({
      isAdd: 'isAdd',
      selectItems: 'selectItems',
      isEdit: 'isEdit',
      isView: 'isView',
      roles: 'roles',
    }),
  },
  watch: {
    $route(to, from) {
      const type = to.name
      this.columns = this.getAddForm(type)
      this.getMenuLable(to.path)
      this.$get(`/${type}/view`, { page: 1, rows: 20 })
    },
    select(val) {
      const item = this.data.list[val]
      const { length } = this.selectItems
      this.selectItems = this.selectItems.splice(0, length)
      this.selectItems.push(item)
    },
    exportTable(val) {},
  },
  created() {},

  methods: {
    // 翻页事件
    changePage(page) {
      this.$emit('search', {
        page,
        rows: this.data.pageSize,
      })
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    // 每页条数变更事件
    changeSize(count) {
      this.$emit('search', {
        page: this.data.pageNum,
        rows: count,
      })
    },
    formatSex: function (row, column) {
      return row.status === 0
        ? '未审核'
        : row.status === 1
        ? '已退回'
        : row.status === 2
        ? '已审核'
        : row.status === 3
        ? '已支付'
        : '未付清'
    },
    clickHandler(...params) {
      const type = params[2]
      const item = params[1]
      if (type === 2) {
        // 查看
        this.$emit('edit', { item, type })
      } else if (type === 3) {
        // 查看
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
