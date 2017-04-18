var gulp = require('gulp');
var sass = require('gulp-sass');

//sass task
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch sass task
gulp.task('sass-watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});


//rtl task
var rtlcss = require('gulp-rtlcss');
var rename = require("gulp-rename");

gulp.task('rtl', function() {
    return gulp.src('css/main.css')
        .pipe(rtlcss())
        .pipe(rename({
            suffix: "-rtl",
        }))
        .pipe(gulp.dest('css'));
});


//minify css
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('css'));
});


//minify js
var minify = require('gulp-minify');

gulp.task('minify-js', function() {
    gulp.src('js/*.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js', 'plugins.js']
        }))
        .pipe(gulp.dest('js'))
});



//autoprefixer
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function() {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['> 0%'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});


//bootlint
var bootlint = require('gulp-bootlint');

gulp.task('bootlint', function() {
    return gulp.src('./index-ar.html')
        .pipe(bootlint());
});



//csslint
var csslint = require('gulp-csslint');

gulp.task('csslint', function() {
    gulp.src('./css/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});


//jslint
var jslint = require('gulp-jslint');

gulp.task('jslint', function() {
    return gulp.src(['./js/main.js'])
        .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
        .pipe(jslint.reporter('default'))
});


//html5Lint
var html5Lint = require('gulp-html5-lint');

gulp.task('html5lint', function() {
    return gulp.src('*.html')
        .pipe(html5Lint());
});