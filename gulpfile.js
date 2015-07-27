/* Gulp cofigurations */

var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	minifyCss 	= require('gulp-minify-css'),
	concatCss 	= require('gulp-concat-css'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	express  	= require('express');
	app 		= express(), 
	port 		= 3000;


/* Paths */


var path = {

	bower: 'bower_components/',
	js: 'src/js/',
	app: 'src/js/app/',
	plugins: 'src/plugins/'
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
				path.bower + 'scrollup/dist/jquery.scrollUp.min.js',
				path.bower + 'spin.js/spin.js',
				path.bower + 'angular-spinner/angular-spinner.js',
				path.bower + 'angular-ui-view-spinner/src/angular-ui-view-spinner.js',
				path.bower + 'slick-carousel/slick/slick.min.js',
				path.bower + 'ladda/js/spin.js',
				path.bower + 'ladda/js/ladda.js',
				path.bower + 'angular-ladda/dist/angular-ladda.min.js',
				
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
				path.app + 'services/fruitData.service.js',
				path.app + 'services/userData.service.js', 
				path.js +  '**/*.js',
				path.plugins +'/*.js'

			])

			.pipe(concat('scriptsJs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'))

});


//Managing CSS dependencies 

gulp.task('dependenciesCss', function(){

	return gulp.src([

				path.bower + 'foundation/css/foundation.css',
				path.bower + 'components-font-awesome/css/font-awesome.css',
				path.bower + 'angular-ui-view-spinner/src/angular-ui-view-spinner.css',
				path.bower + 'slick-carousel/slick/slick.css',
				path.bower + 'slick-carousel/slick/slick-theme.css',
				path.bower + 'ladda/dist/ladda-themeless.min.css'

			])

			.pipe(concatCss("dependenciesCss.min.css"))
			.pipe(gulp.dest('build/css'))

});

//Managing CSS stylesheet
gulp.task('stylesheets', function(){

	return gulp.src('src/css/styles.css')

			.pipe(rename('stylesheets.min.css'))	
			.pipe(minifyCss())
			.pipe(gulp.dest('build/css'))
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


