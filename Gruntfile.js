module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
    dist: {
      files: {
        'public/js/app.js': ['src/**/*.js']
      }
    }
  },
  nodemon: {
      dist: {
        script: 'server.js'
      }
    },
    less: {
      dist: {
        files: {
          "public/css/main.css": ["node_modules/bootstrap/dist/css/bootstrap.css", "src/less/**/*.less"]
        }
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/**/*.js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['mochaTest', 'browserify'])

  grunt.registerTask('test', ['mochaTest']);
  // Default task(s).
  grunt.registerTask('default', ['browserify', 'less:dist', 'nodemon:dist']);

};