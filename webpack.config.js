const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    publicPath: '/',
    compress: false,
    port: 8080,
    hot: true,
    inline: true,
  },
  resolve: {
    alias: {
      // Alias to the pathced pdf-viewer
      'pdfjs-dist/web/pdf_viewer': path.resolve(__dirname, 'monkey-patch/pdf.js/web/pdf_viewer.js')
    },
  },
  externals: [
    function ({ context, request }, callback) {
      if (/^pdfjs-dist\/webpack$/.test(request)) {
        console.log('External', request, 'pdfjsLib')
        return callback(null, 'pdfjsLib')
      }

      if (/^pdfjs-dist\/lib\/web.+$/.test(request)) {
        console.log('External', request, 'pdfjsViewer')
        return callback(null, 'pdfjsViewer')
      }
      console.log('Internal', request)
      // Continue without externalizing the import
      callback()
    },
  ],
  devtool: 'source-map',
  entry: {
    'main-viewer': './src/main-viewer',
    'page-viewer': './src/page-viewer',
    'pdfjs-lib': './src/pdfjs-lib',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    clean: true,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']],
              exclude: [/node_modules/],
              plugins: [['@babel/plugin-proposal-class-properties']],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/pdfjs-dist/build/pdf.js',
          to: 'pdf.js',
        },
        {
          from: 'node_modules/pdfjs-dist/build/pdf.js.map',
          to: 'pdf.js.map',
        },
        {
          from: 'node_modules/pdfjs-dist/build/pdf.worker.js',
          to: 'pdf.worker.js',
        },
        {
          from: 'node_modules/pdfjs-dist/build/pdf.worker.js.map',
          to: 'pdf.worker.js.map',
        },
        {
          from: 'monkey-patch/pdf.js/web/pdf_viewer.js',
          to: 'pdf_viewer.js',
        },
        {
          from: 'node_modules/pdfjs-dist/web/pdf_viewer.css',
          to: 'pdf_viewer.css',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build/demo/index.html'),
      template: path.resolve(__dirname, 'dist/demo/index.html'),
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build/demo/single-page.html'),
      template: path.resolve(__dirname, 'dist/demo/single-page.html'),
      inject: true
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'pdfjs',
          chunks: 'initial',
        },
      },
    },
  },
}
