const gulp = require('gulp')
const del = require('del')
const less = require('gulp-less')



gulp.task('clean', function(){
  return del(['dist'])
})

gulp.task('less', ['clean'], function(){
  gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
})

gulp.task('move', ['clean'], function(){
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
})

gulp.task('default', ['clean', 'less', 'move'], function() {
});