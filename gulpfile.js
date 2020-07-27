var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var replace = require('gulp-replace');
var fs = require('fs');
var fpPackage = require('./package.json');

gulp.task('css', function(done) {
    gulp.src('./src/fullpage.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
        done();
});

gulp.task('js', function(done) {
    gulp.src('./src/fullpage.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
    
        done();
});

/**
 * Updates version number in credit comments and window variable.
 */
gulp.task('update-version', function(done){
    gulp.src([
        './src/fullpage.js',
        './src/fullpage.extensions.js',
        './src/fullpage.css',
    ])
    .pipe(replace(/(FP\.version = ')([\d\.])+(')/g, "$1" + fpPackage.version + "$3"))
    .pipe(replace(/(fullPage )([\d\.]+)/g, "$1" + fpPackage.version))
    .pipe(gulp.dest('./src/'));

    done();
});

gulp.task('vendors', function(done) {
    gulp.src([
        './vendors/scrolloverflow.js',
        './vendors/easings.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./vendors'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./vendors'));
        done();
});

//private file
gulp.task('extensions', function(done) {
    gulp.src('./src/fullpage.extensions.js')
        .pipe(uglify({
            output: {
                comments: 'some'
            },
            compress: {
                pure_funcs: [ 'console.log' ]
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
        done();
});

gulp.task('default', gulp.parallel('css', 'js'));