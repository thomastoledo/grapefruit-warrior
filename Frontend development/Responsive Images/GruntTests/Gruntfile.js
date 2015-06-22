module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: { // 2. Configuration for concatenating those files goes here
          /*options: {
            separator: ';',
          },*/
          dist: {
            //Files to concatenate
            src: ['src/script.js', 'src/bootstrap.js'],
            //Destination
            dest: 'dist/built.js',
          },
        },

        uglify: {
            build: {
                src: 'dist/built.js',
                dest: 'dist/built.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images_src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images_dest/'
                }]
            }
        }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
