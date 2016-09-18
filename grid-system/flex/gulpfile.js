var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');


// postcss help transform css
gulp.task('css', function() {
    return gulp.src('src/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('autoprefixer'), require('precss')]))
        .pipe(gulp.dest('dist/'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/'));
});
