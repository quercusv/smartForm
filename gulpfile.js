var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('default', ['clean'], function() {
  return gulp.src('src/index.js')
    .pipe(webpack())
    .pipe(rename('smartForms.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify({
        mangle : true,
        screw_ie8 : true,
        wrap : true,
        export_all : true,
        compress : {
            sequences : true,
            dead_code : true,
            conditionals : true,
            booleans : true,
            unused : true,
            if_return : true,
            join_vars : true,
            drop_console : true,
            unsafe : true,
            comparisons : true,
            loops : true
        }
    }))
    .pipe(rename('smartForms.min.js'))
    .pipe(gulp.dest('dist/'));
});
          
gulp.task('clean', function(){
    del('dist/*');
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('./index.html')
    .pipe(wiredep({
        dependencies: false,
        devDependencies: true
    }))
    .pipe(gulp.dest('./'));
});