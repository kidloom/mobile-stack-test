var aliasify = require('./aliasify');
var sourceFiles = require('./sourceFiles');

module.exports = {
  dev: {
    files: {
      '.tmp/app.js': ['src/**/*.js']
    },
    options: {
      browserifyOptions: {
          debug: true
      },
      bundleDelay: 1000,
      transform: ['babelify', aliasify('dev')]
    }
  },
  prod: {
    files: {
      'dist/app.js': ['src/**/*.js']
    },
    options: {
      bundleDelay: 1000,
      transform: ['babelify', aliasify('prod')]
    }
  }
};
