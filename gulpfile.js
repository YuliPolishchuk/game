var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task('sass', function(){
  gulp.src('project/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('project/css'))
  .pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', function () {
  gulp.watch('project/scss/**/*.scss', ['sass']);
});

gulp.task('browser', function(){
  browserSync({
    server: {
      baseDir: 'project'
    },
    notify: false
  })
});

gulp.task('default', ['watch']);