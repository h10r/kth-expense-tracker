module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      distControllers: {
        // the files to concatenate
        src: ['app/js/controllers/*.js'],
        // the location of the resulting JS file
        dest: 'app/js/controllers/concat-min/controllers.concat.js'
      },
      distModels: {
        // the files to concatenate
        src: ['app/js/models/*.js'],
        // the location of the resulting JS file
        dest: 'app/js/models/concat-min/models.concat.js'
      },
      distDirectives: {
        // the files to concatenate
        src: ['app/js/directives/*.js'],
        // the location of the resulting JS file
        dest: 'app/js/directives/concat-min/directives.concat.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      buildControllers: {
        src: 'app/js/controllers/*.js',
        dest: 'app/js/controllers/concat-min/controllers.concat.min.js'
      },
      buildModels: {
        src: 'app/js/models/*.js',
        dest: 'app/js/models/concat-min/models.concat.min.js'
      },
      buildDirectives: {
        src: 'app/js/directives/*.js',
        dest: 'app/js/directives/concat-min/directives.concat.min.js'
      },
      buildMainJs: {
        src: 'app/js/app.js',
        dest: 'app/js/app.min.js'
      },
    },
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'compressed'
        },
        files: { // Dictionary of files
          'app/css/app.min.css': 'app/css/scss/app.scss' // 'destination': 'source'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

};