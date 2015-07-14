/*  Routing Configuration */

(function (){

	'use strict';

	angular.module('myApp')

		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

			 $urlRouterProvider.when('', '/');

			 //when accessing process form validation, by default, it directs to profile 
			 //so the state is not blank
	 		 $urlRouterProvider.when('/processForm', '/processForm/content');
	 		
				$stateProvider
				
				.state('home', {

					url: '/',

					templateUrl: 'src/js/app/content/fruit list/fruitList.tpl.html',

					controller: 'fruitListCtrl'

				})

				.state('singleFruit', {

					url: '/:fruitName/:fruitImg/:fruitPrice/:fruitDescription',

					templateUrl: 'src/js/app/content/single list/singleFruit.tpl.html',

					controller: 'singleFruitCtrl'
				})

			

				.state('processForm' , {

					url: '/processForm',

					templateUrl: 'src/js/app/content/process form/processForm.tpl.html',

					controller: 'processFormCtrl'

				})
					//Nested routing using the (.) notation 
						//processForm/profile
						//processForm/payment

					.state('processForm.content', {

						url: '/content',

						templateUrl: 'src/js/app/content/process form/processForm.content.tpl.html'
					})

					.state('processForm.profile', {

						url: '/profile',

						templateUrl: 'src/js/app/content/process form/processForm.profile.tpl.html'
					})
					
					.state('processForm.payment', {

						url: '/payment',

						templateUrl: 'src/js/app/content/process form/processForm.payment.tpl.html'
					});
			
				   
		}]);

}());