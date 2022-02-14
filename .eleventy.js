const fd = require('./flightdeck.manifest');
const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  // watch for changes
  eleventyConfig.addWatchTarget(fd.sass.src);
  // eleventyConfig.addWatchTarget(fd.js.src);

  // copy stuff
  eleventyConfig.addPassthroughCopy(fd.sass.dest);
  eleventyConfig.addPassthroughCopy(fd.js.dest);
  eleventyConfig.addPassthroughCopy(fd.img.dest);

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
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
