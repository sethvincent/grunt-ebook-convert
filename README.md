# grunt-ebook-convert

> grunt task for generating ebooks with the calibre command-line tool ebook-convert

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ebook-convert --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ebook-convert');
```

## The "ebook_convert" task

### Overview
In your project's Gruntfile, add a section named `ebook_convert` to the data object passed into `grunt.initConfig()`.

```js
'use strict';

module.exports = function(grunt) {
  var args = [
    ['--base-font-size', '10'], 
    ['--authors', 'Seth Vincent'],
    ['--publisher', 'seattle.io'],
    ['--extra-css', 'test.css']
  ];

  // Project configuration.
  grunt.initConfig({
      
    ebook_convert: {
      'test.pdf':{
        source: 'test.html',
        arguments: args
      },
      'test.epub':{
        source: 'test.html',
        arguments: args
      },
      'test.mobi':{
        source: 'test.html',
        arguments: args
      }
    }

  });

  grunt.loadNpmTasks('grunt-ebook-convert');

  // Default task.
  grunt.registerTask('default', ['ebook_convert']);

};

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.0.1
 - everything basically works!
