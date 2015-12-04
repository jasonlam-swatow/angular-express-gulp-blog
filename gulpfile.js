var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    jshint     = require('gulp-jshint'),
    rename     = require('gulp-rename'),
    concat     = require('gulp-concat'),
    imagemin   = require('gulp-imagemin'),
    minifycss  = require('gulp-minify-css'),
    pngquant   = require('imagemin-pngquant'),
    browserify = require('gulp-browserify'),

    input = {
      'css'  : 'src/css/**/*.css',
      'js'   : 'src/js/**/*.js',
      'img'  : 'src/img/**/*'
    },

    output = {
      'css' : 'build/css',
      'js'  : 'build/js',
      'img' : 'build/img'
    };

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  gulp.src(input.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
  gulp.src(['src/js/lib/angular/angular.min.js',
            'src/js/lib/angular/angular-route.min.js',
            'src/js/app.js',
            'src/js/controllers.js',
            'src/js/directives.js',
            'src/js/filters.js',
            'src/js/services.js' ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(output.js))
    // .pipe(browserify({
    //   insertGlobals : true,
    //   debug : !gulp.env.production
    // }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(output.js));
});

gulp.task('build-css', function() {
  gulp.src(input.css)
    .pipe(minifycss())
    .pipe(gulp.dest(output.css));
});

gulp.task('build-img', function() {
  gulp.src(input.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(output.img));
});

gulp.task('watch', function() {
  gulp.watch(input.js, ['jshint', 'build-js']);
  gulp.watch(input.css, ['build-css']);
});