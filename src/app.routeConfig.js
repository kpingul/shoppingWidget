/*  Routing Configuration */


(function (){

	'use strict';

		angular.module('myApp')
		


		.config(routes);

		routes.$inject = ['$stateProvider', '$urlRouterProvider'];


		function routes( $stateProvider, $urlRouterProvider) {


				 $urlRouterProvider.when('', '/');

				
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
					

						.state('processForm.content', {

							url: '/content', 
							
							controller: 'ProcessFormCtrl',

							templateUrl: 'src/js/app/content/process form/processForm.content.tpl.html', resolve: {
									
										load: function($timeout) {

											return $timeout(angular.noop, 320);

										}
							}


						})

						.state('processForm.profile', {

							url: '/profile', 
							
							controller: 'ProcessFormCtrl',

							templateUrl: 'src/js/app/content/process form/processForm.profile.tpl.html', resolve: {
									
										load: function($timeout) {

											return $timeout(angular.noop, 320);

										}
							}
						})
						
						.state('processForm.payment', {

							url: '/payment', 

							controller: 'ProcessFormCtrl',

							templateUrl: 'src/js/app/content/process form/processForm.payment.tpl.html', resolve: {
									
										load: function($timeout) {

											return $timeout(angular.noop, 320);

										}
							}

						});
				
					   
			};



}());

