const path = require('path');
module.exports = {
  sass: {
    src: './src/_scss/**/*.scss',
    dest: './src/assets/css',
  },
  js: {
    src: './src/assets/js',
    dest: './src/assets/js',
  },
  img: {
    src: './src/assets/images',
    dest: './src/assets/images',
  },
  bs: {
    notify: true,
    open: true,
  },
};
