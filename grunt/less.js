module.exports = {
  options: {
    paths: ['node_modules', 'src/less'],
    compress: false,
  },
  prod: {
    options: {
      sourceMap: false
    },
    files: {
      '.tmp/css/app.css': 'src/less/app.less'
    }
  },
  dev: {
    options: {
      sourceMap: true
    },
    files: {
      '.tmp/css/app.css': 'src/less/app.less'
    }
  }
};
