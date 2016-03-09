module.exports = {
  options: {
    livereload: true,
  },
  html: {
    files: ['src/**/*.dot'],
    tasks: ['dot']
  },
  scripts: {
    files: ['src/**/*.js', 'src/assets/css/*.css'],
    tasks: ['eslint', 'compile']
  },
  less: {
    files: ['src/less/*'],
    tasks: ['less:dev']
  },
  tests: {
    files: ['test/**/*.js'],
    tasks: ['test']
  }
};
