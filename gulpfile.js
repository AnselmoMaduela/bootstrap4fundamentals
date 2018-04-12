var gulp = require("gulp");
var notify = require("gulp-notify");
// var uglify = require("gulp-uglify");
// var pump = require('pump');
 
/*
* #sass task
* 
* This task target the bootstrap folder in node_modules,
* and it copies all scss files to an src folder so that
* you can change any bootstrap property and by working
* whith the sass css processor
* 
*/
gulp.task('sass', function() {
    gulp.src('node_modules/bootstrap/scss/**/**')
    .pipe(gulp.dest('src/scss/bts'));
});


/*
* #cpjs task
* This task copies the boostrap and jquery js files
* to dist/js folder for further import when and ever you
* may want to use them.
* 
*/
gulp.task('cpjs', function() {
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js',
        	     'node_modules/bootstrap/dist/js/bootstrap.min.js',
        	     'node_modules/jquery/dist/jquery.js',
        	     'node_modules/jquery/dist/jquery.min.js',
        	     'node_modules/jquery/dist/jquery.slim.min.js'])
    .pipe(gulp.dest('dist/js/'));
});

/*
* #compress
* This task copies the popper.js to dist/js
* It was created to minify the file before it was copied
* to the dist folder
*/
gulp.task('compress', function() {
	gulp.src('node_modules/popper.js/dist/popper.js')
    .pipe(gulp.dest('dist/js/'));
});


// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('node_modules/popper.js/dist/popper.js'),
//         uglify(),
//         gulp.dest('dist/js/')
//     ],
//     cb
//   );
// });


// gulp.task("compilecss", function() {
//   return gulp.src("./src/sass/**/*.scss")
//     .pipe(sass({outputStyle: 'compressed'}))
//     .pipe(sass())
//     .on('error', notify.onError({title: 'Erro ao compilar', message: '<%= error.message %>'}))
//     .pipe(gulp.dest("./dist/css"));
// });