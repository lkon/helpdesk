var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {

    return gulp.src('./public/css/theme.less')
               .pipe(sourcemaps.init())
               .pipe(less({
                   paths: [path.join(__dirname, 'less', 'includes')]
               }))
               .pipe(autoprefixer(['ie >= 8', 'last 3 versions', '> 2%']))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('./public/css/*.less', ['less']);
});
