const { src, dest, watch, series } = require('gulp')
const gulpSass = require('gulp-sass')


//compile
// gulp.task(‘sass’, function () {
//   gulp.src(‘app/scss/app.scss’)
//   .pipe(sass().on(‘error’, sass.logError))
//   .pipe(gulp.dest(‘app/css’));
// });

function sass () {
  return src('app/scss/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('app/css'));
}

function javascript (cb) {
    cb()
}


//compile and watch
// gulp.task(‘sass:watch’, function() {
//   gulp.watch(‘app/scss/app.scss’, [‘sass’]);
// });



exports.default = function () {
    watch('app/scss/*.scss', sass);
}
