const path = require('path')

module.exports={
    entry:'./src/index.js',
    devtool:'cheap-module-eval-source-map',
    output:{
        path:'',
        filename:'bundle.js',
        publicPath:path.resolve(__dirname,'dist')

    }
}