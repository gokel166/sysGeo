/*required methods */

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


/* tasks */

gulp.task('depsjs', function() {
    
    return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css'
                    'node_modules/bootstrap/dist/js/bootstrap.js'])
                    .pipe(concat('deps.js'))
                    .pipe(gulp.dest('src'));
});


gulp.task('depsDist', function() {
    return gulp.src(['src/deps.js'])
        .pipe)rename('deps.min.js')
});

gulp.task('default', function() {
    
    return gulp.src(['
                     .pipe(rename('src/js/app.js'))'])
                     .pipe(uglify())
                     .pipe(gulp.dest('bin'));
});