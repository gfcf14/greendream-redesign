const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'containers': path.resolve(__dirname, 'src/containers'),
      'images': path.resolve(__dirname, 'src/images'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.jsx', '.js', '.scss', '.json'],
  }
}

