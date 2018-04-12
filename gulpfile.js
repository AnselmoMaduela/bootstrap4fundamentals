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