const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
    gulp.src('*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('*.less', ['less']);
});

gulp.task('default', ['less']);
