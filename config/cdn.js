module.exports = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    axios: 'axios',
    'element-ui': 'ELEMENT',
    vuex: 'Vuex',
    echarts: 'echarts',
  },
  css: ['https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css'],
  js: [
    // 压缩版Vue.js 会导致Vue devtools 无法使用
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.js',
    // 'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js',
    'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.2.1/echarts.min.js',
  ],
}
