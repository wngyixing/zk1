var gulp = require('gulp'),
    less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat'), //文件合并
    minifycss = require('gulp-clean-css'),
    webserver = require('gulp-webserver')
gulp.task('less', function() {
    gulp.src('./src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css/'))
        .pipe(minifycss("all.css"))
        .pipe(gulp.dest('./src/css/bulid'))
})
gulp.task('server', function() {
    gulp.src('src').pipe(webserver({
        host: 'localhost',
        port: 2222
    }))
})
gulp.task('default', ['less', 'server'])