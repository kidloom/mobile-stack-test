var sourceFiles = require('./sourceFiles');

module.exports = {
  options: {
    livereload: true,
  },
  html: {
    files: ['src/**/*.html'],
    tasks: ['dot']
  },
  scripts: {
    files: sourceFiles.concat('src/assets/css/*.css').concat('src/**/*.js'),
    tasks: ['eslint', 'compile']
  }
};
