const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', () => {
  return gulp.src('./src/**/*')
    .pipe(ghPages());
});

// compile custom SCSS files
gulp.task('sass', () => {
  return gulp.src([
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

// pug build pages
gulp.task('pug', function() {
  return gulp.src('src/templates/**/*.pug')
  .pipe(pug({
    pretty: true,
    cache: false
  }))
  .pipe(gulp.dest('src'))
  .pipe(browserSync.stream());
});

// copy JS modules
gulp.task('js', () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'
  ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});

// copy CSS static modules
gulp.task('css', () => {
  return gulp.src([
    'node_modules/animate.css/animate.min.css'
  ])
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});

// init develop Server
gulp.task('serve', ['sass','js','css','pug'], () => {
  browserSync.init({
    server: './src'
  });

  gulp.watch(['src/templates/**/*.pug','src/templates/**/*.txt'], ['pug']);
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch('src/**/*').on('change',
    browserSync.reload
  );
});

// defaul task typing 'gulp'
gulp.task('default', ['js', 'css', 'sass', 'serve'])
