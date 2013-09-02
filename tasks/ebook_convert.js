/*
 * grunt-ebook-convert
 * https://github.com/sethvincent/grunt-ebook-convert
 *
 * Copyright (c) 2013 sethvincent
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var convert = require('ebook-convert');

  grunt.registerMultiTask('ebook-convert', 'generate ebooks with calibre', function() {
    var options = this.options();

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(f) {
      options.target = f.dest;
      convert(options);
      grunt.log.ok('Created ' + options.target);
    });
  });
};
