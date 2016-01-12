gulp = require('gulp')
plumber = require('gulp-plumber')
gutil = require('gulp-util')
bower = require('bower')
concat = require('gulp-concat')
sass = require('gulp-sass')
sh = require('shelljs')
haml = require('gulp-haml')
notify = require('gulp-notify')
jst = require('gulp-jst')
wrap = require('gulp-wrap')
declare = require('gulp-declare')
coffee = require('gulp-coffee')
sourcemaps = require('gulp-sourcemaps')
clean = require('gulp-clean')
notifier = require('node-notifier')

e = ->
  plumber({errorHandler: notify.onError("Error: <%= error.message %>")})

gulp.task 'clean', ->
  gulp.src('./build/', read: false)
    .pipe clean()

gulp.task 'default', ['build_js', 'sass', 'haml'], ->
  notifier.notify
    'title': 'Done'
    'message': 'Done!'

gulp.task 'build_js', ['coffee', 'jst'], ->
  gulp.src([ './build/js/**/*.js' ])
    .pipe(e())
    .pipe(sourcemaps.init(loadMaps: true))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe gulp.dest('./www')

gulp.task 'haml', ->
  gulp.src('./haml/**/*.haml')
    .pipe(e())
    .pipe(haml({
      ext: '.html'
      compiler: 'visionmedia'
    }))
    .pipe gulp.dest('./www')

gulp.task 'coffee', ->
  gulp.src([ './coffee/**/*.coffee' ])
    .pipe(e())
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(concat('all.js'))
    .pipe gulp.dest('./build/js')

gulp.task 'jst', ->
  gulp.src('./jst/*.html')
    .pipe(e())
    .pipe(jst())
    .pipe(declare({
      namespace: 'FastCast.templates'
      noRedeclare: true
    }))
    .pipe(concat('jst.js'))
    .pipe gulp.dest('./build/js')

gulp.task 'sass', ->
  gulp.src('./scss/**/*.scss')
    .pipe(e())
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(concat('all.css'))
    .pipe gulp.dest('./www')

gulp.task 'watch', ->
  gulp.watch ['./scss/**/*.scss', './www/lib/ionic/scss/**/*.scss'], ['sass']
  gulp.watch './haml/**/*.haml', ['haml']
  gulp.watch './jst/**/*.html', ['build_js']
  gulp.watch './coffee/**/*.coffee', ['build_js']
