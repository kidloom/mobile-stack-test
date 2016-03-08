module.exports = {
  dev: {
    options: {
      variable: 'templ',
      root: __dirname+'/',
      node: true
    },
    src: [ 'src/js/components/**/*.dot' ],
    dest: 'src/templates.js'
  }
};
