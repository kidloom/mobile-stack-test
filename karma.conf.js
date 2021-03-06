var aliasify = require('./grunt/aliasify');

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['browserify', 'jasmine', 'phantomjs-shim'],

    files: [
      'test/**/*.js',
      'test/*.html'
    ],

    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify'],
      'test/karma.html': ['html2js']
    },

    reporters: ['mocha'],

    mochaReporter: {
      // The option autowatch means that the first run will have the full
      // output and the next runs just output the summary and errors in mocha style.
      output: 'autowatch',
    },

    browserify: {
      debug: true,
      transform: ['babelify', aliasify('dev')]
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [/*'Chrome',*/ 'PhantomJS'],

    plugins: [
      'karma-html2js-preprocessor',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
			'karma-phantomjs-shim',
      'karma-jasmine',
      'karma-browserify',
      'karma-mocha-reporter'
    ],

    singleRun: true
  });
};
