var textReplacer = require('./grunt/replace');

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      prod: ['./dist'],
      dev: ['.tmp']
    },
    eslint: require('./grunt/eslint'),
    replace: textReplacer(grunt),
    browserify: require('./grunt/browserify'),
    karma: require('./grunt/karma'),
    watch: require('./grunt/watch'),
    copy: require('./grunt/copy'),
    connect: require('./grunt/connect'),
    less: require('./grunt/less'),
    dot: require('./grunt/dot')
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('compile', [
    'less:dev',
    'browserify:dev',
    'copy:dev',
    'replace:dev'
  ]);

  grunt.registerTask('serve', [
    'eslint',
    'clean:dev',
    'dot',
    'compile',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'eslint',
    'dot',
    'karma'
  ]);

  grunt.registerTask('build', [
    'eslint',
    'dot',
    'karma',
    'clean:prod',
    'browserify:prod',
    'less:dev',
    'copy:prod',
    'replace:prod'
  ]);
};
