var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var replace = require('gulp-replace');
var fpPackage = require('../package.json');

gulp.task('css', function(done) {
    gulp.src('./src/css/fullpage.css')
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

/**
 * Updates version number in credit comments, window variable and README.md
 */
gulp.task('update-version', function(done){

    // updating sources
    gulp.src([
        './src/js/fullpage.js',
        './src/js-extensions/fullpage.js',
        './rollup.config.js',
        './rollup.ext.config.js',
        './src/css/fullpage.css'
    ], { base: "./" })
        .pipe(replace(/(FP\.version = ')([\d\.])+(')/g, "$1" + fpPackage.version + "$3"))
        .pipe(replace(/(fullPage )([\d\.]+)/g, "$1" + fpPackage.version))
        .pipe(gulp.dest('.'));

    // updating readme version
    gulp.src([
        './README.md',
        './lang/brazilian-portuguese/README.md',
        './lang/chinese/README.md',
        './lang/french/README.md',
        './lang/japanese/README.md',
        './lang/korean/README.md',
        './lang/russian/README.md',
        './lang/spanish/README.md'
    ], { base: "./" })
        .pipe(replace(/(fullPage.js-v)([\d\.]+)/g, "$1" + fpPackage.version))
        .pipe(gulp.dest('.'));

    done();
});

gulp.task('vendors', function(done) {
    gulp.src([
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

gulp.task('default', gulp.series('update-version', 'css'));