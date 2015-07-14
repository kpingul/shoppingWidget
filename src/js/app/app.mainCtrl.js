/* Home Controller */

(function() {

	'use strict';

		angular.module('myApp')

			.controller('mainCtrl', ['$scope', 'fruitData', 'userData', function($scope, fruitData, userData) {

				$scope.items = 0;
				$scope.total = 0;

				//listens for any updates within users data and is imediately updated
				//when data is changed for two way binding across controllers
				$scope.$on('handleBroadCast', function(){

					$scope.items = userData.totalItemCount;
					$scope.total = userData.totalPrice;

				})


			}]);
}());