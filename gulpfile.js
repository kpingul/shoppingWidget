/* Gulp cofigurations */

var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	minifyCss 	= require('gulp-minify-css'),
	rename 		= require('gulp-rename'),
	sass 		= require('gulp-sass'),
	uglify 		= require('gulp-uglify'),
	express  	= require('express');



/* Gulp Tasks */

gulp.task('sass', function(){

	return gulp.src('src/scss/*.scss')
		   .pipe(sass({
		   		errLogToConsole: true
		   }))
		   .pipe(gulp.dest('src/css'));
})

/* Gulp Watch Tasks */
gulp.task('watchSass', function(){

	return gulp.watch('src/scss/*.scss', ['sass']);
});

/* Server Configuration */

gulp.task('express', function(){

	var express 	= require('express'),
		app 		= express(), 
		port 		= 9000;


	app.use(express.static(__dirname + "/"));

	app.listen(9000, function() {
		console.log('Server running on port' + port);
	});



});

gulp.task('default', ['express']);


