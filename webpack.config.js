const path = require('path');

module.exports = {
  entry: './src/html/kayros/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/kayros'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
