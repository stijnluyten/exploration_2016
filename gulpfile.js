var gulp = require('gulp');
var clean = require('gulp-clean');
var install = require("gulp-install")
//clean build directory
gulp.task('clean', function () {
    gulp.src('build/*').pipe(clean());
});

gulp.task('build', function(){
    console.log('do a build');
    gulp.src("pirate").pipe(gulp.dest('./build'));
});

gulp.task('dependencies', function(){
    gulp.src('./package.json').pipe(gulp.dest('./build')).pipe(install());
});
