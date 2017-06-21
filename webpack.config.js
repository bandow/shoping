const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash:5].css",
});
const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index:'./scripts/index.js',
        classify:'./scripts/classify.js',
        shopList:'./scripts/shopList.js',
        shopOrder:'./scripts/shopOrder.js',
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/[name]-[chunkhash:5].js',
        //publicPath: 'dist/' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: /(src)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //   presets: ['env']
                    // }
                }
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader",
                    publicPath:"../"              //真是个坑。坑死人了
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  'url-loader?limit=3500&name=images/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
    plugins: [
       new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['index'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'classify.html',
            template:'classify.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['classify'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'shopList.html',
            template:'shopList.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopList'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'shopOrder.html',
            template:'shopOrder.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopOrder'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'orderDetail.html',
            template:'orderDetail.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopOrder'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'exchangeMoney.html',
            template:'exchangeMoney.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopOrder'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'list.html',
            template:'list.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopOrder'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       new htmlWebpackPlugin({
            filename:'productInfo.html',
            template:'productInfo.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['shopOrder'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       //转化sass的方法
       extractSass,
    ]
}
module.exports=config;