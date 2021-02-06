const path = require('path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        // * reverse order chaining
        use: [
          // 4. create 'style' nodes from JS strings
          'style-loader',
          // 3. translate css to commonjs
           'css-loader',
           // 2. fix url()
           'resolve-url-loader',
           // 1. compile sass > css
            'sass-loader']
      },
      // IMAGES
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // FONTS
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // CSV
      {
        test: /.(csv|tsv)$/i ,
        use: ['csv-loader']
      },
      // XML
      {
        test: /.xml$/i ,
        use: ['xml-loader']
      },
      // TOML
      {
        test: /.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      // YAML
      {
        test: /.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },
    ]
  }
}