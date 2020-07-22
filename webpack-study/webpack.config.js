
let path = require('path')

module.exports = {
    entry: './src/index.js', // 入口
    output: {
        filename: 'build.js', // 打包后的文件名
        path: path.resolve(__dirname,'dist'), // 路径
    }
}