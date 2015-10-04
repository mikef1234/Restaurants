var gulp = require('gulp'),
concatCss = require('gulp-concat-css'),
minifyCss = require('gulp-minify-css'),
htmlmin = require('gulp-html-minifier');
 
gulp.task('minify', function() {
  gulp.src('../*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('../dist'))
});

gulp.task('default', function () {
  return gulp.src('../css/*.css')
    .pipe(concatCss("main.css"))
	.pipe(minifyCss())
    .pipe(gulp.dest('../css'));
});