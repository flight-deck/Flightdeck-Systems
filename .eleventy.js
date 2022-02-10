const fd = require('./flightdeck.manifest');
module.exports = function (eleventyConfig) {
  // watch for changes
  eleventyConfig.addWatchTarget(fd.sass.src);
  // eleventyConfig.addWatchTarget(fd.js.src);

  // copy stuff
  eleventyConfig.addPassthroughCopy(fd.sass.dest);
  eleventyConfig.addPassthroughCopy(fd.js.dest);
  eleventyConfig.addPassthroughCopy(fd.img.dest);

  // workflow
  eleventyConfig.setBrowserSyncConfig(fd.bs);
  return {
    dir: {
      input: 'src',
      output: '_site', // default
      layouts: '_layouts',
    },
  };
};
