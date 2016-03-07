var textReplacer = require('./grunt/replace');

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
		options: {
			force: true
		},
		files: ['./dist']
	},
    eslint: require('./grunt/eslint'),
    replace: textReplacer(grunt),
    browserify: require('./grunt/browserify'),
    karma: require('./grunt/karma'),
    watch: require('./grunt/watch'),
    copy: require('./grunt/copy'),
    connect: require('./grunt/connect')
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'eslint',
    'karma',
    'clean',
    'browserify:dev',
    'copy',
    'replace:dev',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'eslint',
    'karma'
  ]);

  grunt.registerTask('build-prod', [
    'eslint',
    'karma',
    'clean',
    'browserify:prod',
    'copy',
    'replace:prod'
  ]);
};
