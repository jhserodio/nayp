/*==========================================================================
TASKS CONFIGURATION
==========================================================================*/

// REQUIRES

var gulp = require('gulp');
  //postcss requires
var postcss        = require('gulp-postcss'),
    sourcemaps     = require('gulp-sourcemaps'),
    precss         = require('precss'),
    cssnext        = require('postcss-cssnext'),
    autoprefixer   = require('autoprefixer'),
    nano           = require('cssnano'),
    comments       = require('postcss-discard-comments'),
    normalize      = require('postcss-normalize'),
    calc           = require('postcss-calc'),
    lost           = require('lost'),

  // image compress
    imagemin       = require('gulp-imagemin'),

  // utilities
    concat         = require('gulp-concat'),
    watch          = require('gulp-watch'),
    copy           = require('gulp-copy-rex'),
    plumber        = require('gulp-plumber');


// GLOBAL VARIABLES
var src_css        = "resources/assets/styles/style.css",
    wtc_css        = "resources/assets/styles/**/*.css",
    src_img        = "resources/assets/images/*",
    src_font       = "resources/assets/fonts/*",
    src_scripts    = "resources/assets/scripts/*",
    dest_css       = "public/styles",
    dest_font      = "public/fonts/",
    dest_img       = "public/images";
    dest_scripts   = "public/scripts";



// TASKS DECLARATION

// style task
gulp.task('postcss', function () {
  var processors = [
    normalize,
    precss,
    cssnext,
    lost,
    calc,
    comments({removeAll: true}),
    nano,
    autoprefixer({brownsers: ['last 4 version']})
  ];

  return gulp.src(src_css)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write("map"))
    .pipe(gulp.dest(dest_css));
});

// watch
gulp.task('watch', function(){
  gulp.watch(wtc_css, ['postcss']);
})

// default task
gulp.task('default', ['postcss', 'watch']);
