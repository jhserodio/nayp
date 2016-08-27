/*==========================================================================
TASKS CONFIGURATION
==========================================================================*/

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
    svgmin         = require('gulp-svgmin'),
  // utilities
    concat         = require('gulp-concat'),
    watch          = require('gulp-watch'),
    copy           = require('gulp-copy-rex'),
    plumber        = require('gulp-plumber');


// GLOBAL VARIABLES
var src_css        = "resources/assets/styles/style.css",
    wtc            = "resources/assets/**/*",
    src_img        = "resources/assets/images/**/*",
    src_svg        = "resources/assets/vetor/*",
    src_font       = "resources/assets/fonts/*",
    src_scripts    = "resources/assets/scripts/*",
    dest_css       = "public/styles",
    dest_font      = "public/fonts/",
    dest_img       = "public/images";
    dest_svg       = "public/vetor";
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

// compress image files
gulp.task('imagemin', function () {
  return gulp.src(src_img)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('public/images'));
});

// compres svg files
gulp.task('copy-svg', function() {
    copy(src_svg, dest_svg);
});

// copy files
gulp.task('copy-fonts', function() {
  copy(src_font, dest_font);
});

// watch
gulp.task('watch', function(){
  gulp.watch(wtc, ['postcss']);
})

// default task
gulp.task('default', ['postcss', 'copy-fonts', 'imagemin', 'watch']);
