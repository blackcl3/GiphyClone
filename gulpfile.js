const { src, dest, watch, series } = require('gulp')
const gulpSass = require('gulp-sass')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()


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

function javascript () {
    return src('app/js/*.js')
      .pipe(babel({
          presets: ['@babel/env']
      }))
      .pipe(dest('dist'));

}

function html () {
  return src('app/index.html')
    .pipe(dest('dist'))
}

function bs () {
  browserSync.init({
    servier: {
      baseDir: "./"
    }
  })
}

//compile and watch
// gulp.task(‘sass:watch’, function() {
//   gulp.watch(‘app/scss/app.scss’, [‘sass’]);
// });



exports.default = function () {
    watch('app/scss/*.scss', sass);
    watch('app/js/*.js', javascript);
    watch('app/*.html', html)
}
