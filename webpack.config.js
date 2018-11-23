const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'development',
	entry: ['./src/app.script.js', './src/app.style.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.script.js',
	},
	module: {
		rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {importLoaders: 1},
        },
        {
          loader: 'postcss-loader',
          options: {plugins: () => [require('autoprefixer')]}
        },
        {
          loader: 'sass-loader',
          options: {includePaths: ['node_modules']},
        },
      ],
    }, {
      test: /\.html$/,
      use: 'html-loader',
    }, {
      test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]'
      }
    }],
	},
	plugins: [
    new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'app.style.css',
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets/images', to: 'assets/images'},
    ]),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
	},
}
