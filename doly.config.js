const path = require('path');

module.exports = {
  // 别名
  alias: {
    '~': path.join(__dirname, './src')
  },

  // 扩展 babel-loader 的 plugins
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],

  // 定义编译时变量替换
  define: {
    // api 地址
    API_URL: '',
    DEV: true
  },

  // 不同环境配置
  env: {
    // 生产环境
    production: {
      define: {
        API_URL: ''
      }
    }
  }
}
