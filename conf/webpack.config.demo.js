const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env) {
  const outputPath = '../docs'
  const publicPath = ''

  return {
    entry: {
      bundle: './src/js/demo.js',
      styles: './src/styles/main.scss'
    },
    output: {
      path: path.resolve(__dirname, outputPath),
      publicPath: publicPath,
      filename: `js/demo-[name].js${env === 'production' ? '?[chunkhash:8]' : ''}`
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.wasm']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader'
        }, {
          test: /[.]html$/,
          loader: 'html-loader?' + JSON.stringify({ pretty: true })
        }, {
          test: /\.scss$/,
          //use: extractSass.extract({
          //  use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          //  fallback: 'style-loader',
          //  publicPath: '../'
          //})
          use: [
            //{
            //  loader: ExtractTextPlugin.loader,
            //  options: {
            //    publicPath: '../',
            //  },
            //},
            'style-loader?sourceMap',
            'css-loader?sourceMap',
            'sass-loader?sourceMap',
          ],
        }, {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff' +
            '&hash=sha512&digest=hex&name=fonts/[name].[ext]?[hash:8]'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?hash=sha512&digest=hex&name=fonts/[name].[ext]?[hash:8]'
        }, {
          test: /\.(jpe?g|png|gif|svg|ico)$/,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]?[hash:8]'
          ]
        },// {
        //test: /\.wasm$/,
        //  loaders: ['wasm-loader?mimetype=application/wasm']
        //}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, 'src/*.html'))
      }),
      new CopyWebpackPlugin([{
        from: 'src/js/wasm/*.wasm',
        to: 'js/[name].wasm'
      }])
    ],
    devServer: {
      host: 'localhost',
      disableHostCheck: true
    },
    devtool: env === 'production' ? 'source-map' : 'source-map',
    node: {fs: 'empty'}
  }
}
