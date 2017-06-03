module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'scss/styles.scss'
                }
            }
        },

        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js-src/jquery.js', 'js-src/jquery-migrate.js', 'js-src/slick.js', 'js-src/custom.js'],
                dest: 'js/scripts.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/scripts.min.js': ['js/scripts.js']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);

};