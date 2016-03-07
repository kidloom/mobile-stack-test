module.exports = {
  dev: {
    options: {
      variable: 'tpl',
      root: __dirname + '/src/js/components/'
    },
    src: [ '**/*.dot' ],
    dest: './tpl.js'
  }
};
