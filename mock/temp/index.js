const Mock = require('mockjs')
module.exports = [
  {
    url: '/dictDetail/view',
    type: 'get',
    response: config => {
      // const { page = 1, limit = 20 } = config.query

      return {
        code: 200,
        data: {
          config: config.query.toString(),
        },
      }
    },
  },
]
