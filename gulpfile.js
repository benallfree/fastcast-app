var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sh = require('shelljs');
var haml = require('gulp-haml');
var notify = require("gulp-notify");
var jst = require('gulp-jst');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var notifier = require('node-notifier');

gulp.task('clean', function() {
  return gulp.src('./build/', {read: false})
    .pipe(clean());
});

gulp.task('default', ['build_js', 'build_css', 'haml'], function () {
  notifier.notify({
    'title': 'Done',
    'message': 'Done!'
  });
});

gulp.task('build_js', ['coffee', 'jst'], function() {
  return gulp.src(['./build/js/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www'));
});

gulp.task('build_css', ['sass'], function() {
  return gulp.src(['./build/css/**/*.css'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./www'));
});

gulp.task('haml', function() {
  return gulp.src('./haml/**/*.haml')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(haml({
      ext: '.html',
      compiler: 'visionmedia'
    }))
    .pipe(gulp.dest('./www'));
});


gulp.task('coffee', ['clean'], function() {
  return gulp.src(['./coffee/**/*.coffee'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jst', ['clean'], function() {
  return gulp.src('./jst/*.html')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(jst())
    .pipe(declare({
      namespace: 'FastCast.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('jst.js'))
    .pipe(gulp.dest('./build/js'));  
})

gulp.task('sass', ['clean'], function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});





gulp.task('watch', function() {
  gulp.watch([
    './scss/**/*.scss', 
    './www/lib/ionic/scss/**/*.scss',
    './haml/**/*.haml',
    './jst/**/*.html',
    './coffee/**/*.coffee',
  ], ['default']);
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
