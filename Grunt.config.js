module.exports = function (grunt) {
    'use strict';

    return {
        alias: {
            'default': ['build', 'connect', 'watch'],
            'build': [
                'shell:browserify'
            ]
        },
        pkg: grunt.file.readJSON('package.json')
    };
};
