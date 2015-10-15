var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var haml = require('gulp-haml');

var paths = {
  sass: ['./scss/**/*.scss'],
  haml: []
};

gulp.task('default', ['sass', 'haml']);

gulp.task('sass', function(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
 
});

// Get and render all .haml files recursively
gulp.task('haml', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml({ext: '.html'}))
  .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['haml']);
  gulp.watch(['./haml/**/*.haml'], ['haml']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
