const { defineConfig } = require('@vue/cli-service')

// 下卖弄diamante意思 是 让你免于在每一次设置alias时都写前面的 path.join
function resolve(dir) {
  return path.join(__dirname, dir)
}
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
   configureWebpack: {
        resolve: {
            // extension:[], //内部已默认配置
            alias: {
                // router和store不需要配置，因为可以通过$获取。
                '@':resolve('src'), //内部已默认配置
            }
        }
    }
})
