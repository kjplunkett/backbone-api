module.exports = function (grunt) {
    'use strict';

    return {
        alias: {
            'default': ['build', 'connect', 'watch'],
            'build': [
                'browserify:dist'
            ]
        },
        pkg: grunt.file.readJSON('package.json')
    };
};
