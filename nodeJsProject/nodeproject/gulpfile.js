var gulp = require('gulp');

var jshint = require('gulp-jshint');

var jsFiles = ['*.js','src/**/*.js'];

gulp.task('style', function () {
 return gulp.src(jsFiles).pipe(jshint());
});

gulp.task('inject', function () {

 var wiredep = require('wiredep').stream;
 var options = {
  bowerJson: require('./bower.json'),
  directory: './bower_components',
  ignorePath: '../../bower_components'
 };

 var inject = require('gulp-inject');
 var injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js']);
 var injectOptions = {
  ignorePath: './public'
 };

 return gulp.src('./src/views/*.html')
     .pipe(wiredep(options))
     .pipe(inject(injectSrc))
     .pipe(gulp.dest('./src/views'));
});