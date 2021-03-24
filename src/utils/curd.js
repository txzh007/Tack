import Columns from '@/config/cloumns'
import Rules from '@/config/rules'
export default {
  data() {
    return {
      columns: [], // 表集合
      rules: [], // 验证规则
    }
  },
  methods: {
    getAddForm(type) {
      return Columns[type]
    },
    getRules(type) {
      return Rules[type]
    },
  },
  created() {
    this.route = this.$route
    this.columns = this.getAddForm(this.route.name)
    this.rules = this.getRules(this.route.name)
  },
}
