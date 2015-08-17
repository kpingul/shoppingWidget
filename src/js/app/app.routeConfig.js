/*  Routing Configuration */


(function() {

	'use strict';

	angular.module('myApp')


		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {			
			
			$urlRouterProvider.when('', '/');


			$urlRouterProvider.when('/processForm', '/processForm/content');

			$stateProvider

				.state('home', {

					url: '/',

					templateUrl: 'src/js/app/fruit list/fruitList.tpl.html',

					controller: 'fruitListCtrl', 

					controllerAs: 'fruitList',

					resolve: {

							FruitList: ['fruitData', function(fruitData) {

								return fruitData.getAllFruits();

							}]

					}

				})

				.state('singleFruit', {

					url: '/:id',

					templateUrl: 'src/js/app/single list/singleFruit.tpl.html',

					controller: 'singleFruitCtrl',

					controllerAs: 'fruit',

					resolve: { 

						SingleFruit: ['fruitData', '$stateParams', function(fruitData, $stateParams) {
								return fruitData.getSingleFruit($stateParams.id);
						}]

					}
				})

				.state('singleFruitEditing', {

					url: '/editing/:id/:fruitId/:count',

					templateUrl: 'src/js/app/single list/singleFruitEditing.tpl.html',

					controller: 'singleFruitEditingCtrl',

					controllerAs: 'fruitEditing',

					resolve: {

						EditingFruit: ['fruitData', '$stateParams', function(fruitData, $stateParams) {
							return fruitData.getSingleFruit($stateParams.id);

						}],

						FruitCount: ['$stateParams', function($stateParams) {
							var currentFruitCount = $stateParams.count;
							return currentFruitCount;
						
						}],

						ItemInCardId: ['$stateParams', function($stateParams) {
							var itemId = $stateParams.fruitId;
							return itemId;
						}]

					}

				})

				.state('processForm', {

					url: '/processForm',

					controller: 'ProcessFormCtrl',

					controllerAs: 'processForm',

					templateUrl: 'src/js/app/process form/processForm.tpl.html',


				})


					.state('processForm.content', {

						url: '/content',

						controller: 'ProcessFormCtrl',

						controllerAs: 'processForm',

						templateUrl: 'src/js/app/process form/processForm.content.tpl.html',
						resolve: {

							load: function($timeout) {

								return $timeout(angular.noop, 230);

							}
						}


					})

					.state('processForm.profile', {

						url: '/profile',

						controller: 'ProcessFormCtrl',

						controllerAs: 'processForm',


						templateUrl: 'src/js/app/process form/processForm.profile.tpl.html',
						resolve: {

							load: function($timeout) {

								return $timeout(angular.noop, 230);

							}
						}
					})

					.state('processForm.payment', {

						url: '/payment',

						controller: 'ProcessFormCtrl',

						controllerAs: 'processForm',


						templateUrl: 'src/js/app/process form/processForm.payment.tpl.html',
						resolve: {

							load: function($timeout) {

								return $timeout(angular.noop, 230);

							}
						}

					});



		}])





}());