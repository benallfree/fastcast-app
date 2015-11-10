var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var haml = require('gulp-haml');
var notify = require("gulp-notify");
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['sass', 'coffee', 'handlebars', 'concat', 'haml'], function() {
});

gulp.task('concat', function() {
  gulp.src(['./build/js/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www'))
  gulp.src(['./build/css/**/*.css'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./www'))
});

gulp.task('coffee', function() {
  gulp.src(['./coffee/**/*.coffee'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('handlebars', function(){
  gulp.src('./handlebars/*.hbs')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'FastCast.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(sourcemaps.write())
    .pipe(concat('handlebar-templates.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
});

// Get and render all .haml files recursively
gulp.task('haml', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(haml({
      ext: '.html',
      compiler: 'visionmedia'
    }))
    .pipe(gulp.dest('./www'))
    .pipe(notify('Done'))
    ;
});

gulp.task('watch', function() {
  gulp.watch([
    './scss/**/*.scss', 
    './www/lib/ionic/scss/**/*.scss', 
    './haml/**/*.haml', 
    './handlebars/**/*.hbs', 
    './coffee/**/*.coffee'
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
