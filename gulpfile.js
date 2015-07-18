/* Gulp cofigurations */

var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	minifyCss 	= require('gulp-minify-css'),
	rename 		= require('gulp-rename'),
	sass 		= require('gulp-sass'),
	uglify 		= require('gulp-uglify'),
	express  	= require('express');
	app 		= express(), 
	port 		= 3000;


/* Paths */


var path = {

	bower: 'bower_components/',
	js: 'src/js/',
	app: 'src/js/app/'
}



/* Gulp Tasks */

//Managing Javascript dependencies 
gulp.task('dependenciesJs', function(){

	return gulp.src([
			
				path.bower + 'angular/angular.min.js',
				path.bower + 'angular-ui-router/release/angular-ui-router.min.js',
				path.bower + 'angular-animate/angular-animate.min.js',
				path.bower + 'jquery/dist/jquery.min.js',
				path.bower + 'foundation/js/foundation.min.js',
				path.bower + 'foundation/js/foundation/foundation.alert.js',
				path.bower + 'angular-foundation/mm-foundation.min.js',
				path.bower + 'angular-foundation/mm-foundation-tpls.min.js',
				path.bower + 'modernizr/modernizr.js',
				path.bower + 'scrollup/dist/jquery.scrollUp.min.js'
			])

			.pipe(concat('dependenciesJs.js'))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'))

});

//Managing Javascript scripts
gulp.task('scriptsJs', function(){

	return gulp.src([

				path.app + 'app.module.js',
				path.app + 'app.mainCtrl.js', 
				path.app + 'app.routeConfig.js', 
				path.app + 'services/fruitData.service.js',
				path.app + 'services/userData.service.js', 
				path.js +  '**/*.js'

			])

			.pipe(concat('scriptsJs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'))

});


//Managing CSS stylesheet
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


	app.use(express.static(__dirname + "/"));

	app.listen(port, function() {
		console.log('Server running on port' + port);
	});



});


//Lets BUILD!!
gulp.task('default', ['express']);


