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

					url: '/:id',

					templateUrl: 'src/js/app/content/single list/singleFruit.tpl.html',

					controller: 'singleFruitCtrl'
				})

			

				.state('processForm' , {

					url: '/processForm', 

					controller: 'ProcessFormCtrl',

					templateUrl: 'src/js/app/content/process form/processForm.tpl.html',

					
				})
					//Nested routing using the (.) notation 
						//processForm/profile
						//processForm/payment

					.state('processForm.content', {

						url: '/content', //controller: 'ProcessFormCtrl',
						
						controller: 'ProcessFormCtrl',

						templateUrl: 'src/js/app/content/process form/processForm.content.tpl.html', resolve: {
								
									load: function($timeout) {

										return $timeout(angular.noop, 1200);

									}
						}


					})

					.state('processForm.profile', {

						url: '/profile', //controller: 'ProcessFormCtrl',
						
						controller: 'ProcessFormCtrl',

						templateUrl: 'src/js/app/content/process form/processForm.profile.tpl.html', resolve: {
								
									load: function($timeout) {

										return $timeout(angular.noop, 1200);

									}
						}
					})
					
					.state('processForm.payment', {

						url: '/payment', //controller: 'ProcessFormCtrl',

							controller: 'ProcessFormCtrl',

						templateUrl: 'src/js/app/content/process form/processForm.payment.tpl.html', resolve: {
								
									load: function($timeout) {

										return $timeout(angular.noop, 1200);

									}
						}

					});
			
				   
		}]);

}());


