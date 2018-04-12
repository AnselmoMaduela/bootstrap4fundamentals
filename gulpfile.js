var gulp = require("gulp");

gulp.task('sass', function() {
    gulp.src('node_modules/bootstrap/scss')
    .pipe(gulp.dest('src/'));
});