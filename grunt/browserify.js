var aliasify = require('./aliasify');
var sourceFiles = require('./sourceFiles');

module.exports = {
  dev: {
    files: {
      'dist/app.js': sourceFiles
    },

    options: {
      debug: true,
      bundleDelay: 1000,
      transform: ['babelify', aliasify('dev')]
    }
  },
  prod: {
    files: {
      'dist/app.js': sourceFiles
    },

    options: {
      debug: true,
      bundleDelay: 1000,
      transform: ['babelify', aliasify('prod')]
    }
  }
};
