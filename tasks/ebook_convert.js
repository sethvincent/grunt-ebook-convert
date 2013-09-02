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

  grunt.registerMultiTask('ebook_convert', 'generate ebooks with calibre', function() {
    var done = this.async();

    var source = this.data.source;
    var target = this.target;
    var args = this.data.arguments;

    var file = convert({
      source: source,
      target: target,
      arguments: args
    });

    file.on('end', function(){
      grunt.log.ok('Created target');
      done();
    });
      
  });
};
