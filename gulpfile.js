var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var pkg = require('./package.json');

var banner = [
	'/*!\n',
	' * Ukey1 sign-in button (<%= pkg.repository.url %>)\n',
	' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
	' * Licensed under <%= pkg.license %>\n',
	' */\n'
].join('');

gulp.task('less', function() {
	return gulp.src('less/ukey1-button2.less')
		.pipe(less())
		.pipe(header(banner, { pkg: pkg }))
		.pipe(gulp.dest('css'));
});

gulp.task('minify-css', ['less'], function() {
	return gulp.src('css/ukey1-button2.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'));
});

gulp.task('minify-js', function() {
    return gulp.src('js/ukey1-button2.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['less', 'minify-css', 'minify-js']);

gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], function() {
	gulp.watch('less/*.less', ['less']);
	gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
});
