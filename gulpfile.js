var gulp = require("gulp");

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