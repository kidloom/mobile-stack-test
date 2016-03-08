var aliasify = require('./aliasify');
var sourceFiles = require('./sourceFiles');

module.exports = {
  dev: {
    files: {
      'dist/app.js': ['src/templates.js'].concat(sourceFiles)
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
      'dist/app.js': ['src/templates.js'].concat(sourceFiles)
    },
    options: {
      bundleDelay: 1000,
      transform: ['babelify', aliasify('prod')]
    }
  }
};
