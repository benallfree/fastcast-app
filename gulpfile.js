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



gulp.task('default', ['sass', 'haml', 'handlebars', 'coffee']);

gulp.task('coffee', function() {
  gulp.src('./coffee/**/*.coffee')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./www/js/'))
});

gulp.task('handlebars', function(){
  gulp.src('./handlebars/*.hbs')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'FastCast.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('handlebar-templates.js'))
    .pipe(gulp.dest('www/js/'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
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
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(haml({
      ext: '.html',
      compiler: 'visionmedia'
    }))
    .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss', './haml/**/*.haml', './handlebars/**/*.hbs', './coffee/**/*.coffee'], ['haml', 'sass', 'handlebars', 'coffee']);
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
