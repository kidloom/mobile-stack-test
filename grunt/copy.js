module.exports = {
  dev: {
    files: [{
      src: ['src/index.html'],
      dest: '.tmp/index.html'
    }]
  },
  prod: {
    files: [{
      src: ['src/index.html'],
      dest: 'dist/index.html'
    },{
      flatten: true,
      expand: true,
      src: ['.tmp/css/*'],
      dest: 'dist/css'
    },{
      flatten: true,
      expand: true,
      src: ['src/assets/img/*'],
      dest: 'dist/img'
    }]
  }
};
