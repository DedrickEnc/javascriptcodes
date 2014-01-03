  module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: { 
      all: ['client-side/vues/**/*.js'],
      dev: { 
        options: { 
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          }
        },
        files: {
          src: ['/client-side/vues/**/*.js']
        }
      }
    },
    concat: { 
      options : { 
        banner: "/*<%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today('dddd, mmmm dS, yyyy, h:MM:ss TT') %> */\n" + 
                "angular.module('test.controllers', []);\n\n",
        //strip any strict definitions (single in banner), label source
        process: function(src, filepath) {
          return '//src: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }
      },
      Dedrick: { 
        src: ['client-side/vues/**/*.js'],
        dest: 'client-side/js/controllers/controllers.js'
      }
    },
    //working on this (implicitly concatinate to eventually allow sourcemaps)
    uglify: { 
      options: {
        mangle: false,
        //{ except: ['$scope', '$routeProvider', 'etc.'] }
        //version/timestamp - probably shouldn't include angular logic but I'm tired
        banner: "/*<%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today('dddd, mmmm dS, yyyy, h:MM:ss TT') %> */\n" + 
                "'use strict'\n\n" +
                "angular.module('test.controllers', []);\n\n"
      },
      Dedrick: { 
        options: { 
          sourceMap: 'controllers.map.js',
          sourceMapRoot: 'http://localhost:3000/vues/'
        },
        files: {
          'client-side/js/controllers/controllers.min.js' : ['client-side/vues/**/*.js']
        }
      }
    },
    watch: { 
      //FIXME reference uglify files
      files: ['client-side/vues/**/*.js'],
      tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint', 'concat']);
  grunt.registerTask('default', ['concat', 'watch']);
};
