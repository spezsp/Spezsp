var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require ('gulp-clean-css');

gulp.task('scripts', function() {
    return gulp.src([
            '*.js',
         ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
    return gulp.src([
            '*.css',
         ])
        .pipe(concat('all.minify.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'minify-css']);