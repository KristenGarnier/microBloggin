var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    browserify('./src/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('public'));
});

