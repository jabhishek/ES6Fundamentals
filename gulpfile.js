'use strict';
// generated on 2014-10-21 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var gulpKarma = require('gulp-karma');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('karma', function () {
// Be sure to return the stream
    return gulp.src([
        'app/scripts/**/*.js',
        'tests/**/*.js'
    ])
        .pipe(gulpKarma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }))
        .on('error', function (err) {
            throw err;
        });
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/scripts/**/*.js', ['scripts']);
});
