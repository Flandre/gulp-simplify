const gulp = require('gulp')
const del = require('del')
const less = require('gulp-less')
const watch = require('gulp-watch')

gulp.task('clean', function(){
  return del(['dist'])
})

gulp.task('less', ['clean'], function(){
  gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
})

gulp.task('move', ['clean'], function(){
  gulp.src('src/**/{*.{html,css,js},images/*}')
    .pipe(gulp.dest('dist'));
  console.log(`build time: ${new Date()}`)
})

gulp.task('watch', function(){
  gulp.watch('src/**/*', ['clean', 'less', 'move']);
});

gulp.task('default', ['clean', 'less', 'move'], function() {
});