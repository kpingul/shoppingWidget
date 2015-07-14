/* Single fruit Controller */


(function (){

	'use strict';

		angular.module('myApp')

			.controller('fruitListCtrl', ['$scope', 'fruitData', function($scope, fruitData) {



					//fruit array to hold each fruit object
					$scope.fruits = []

					//default fruitCount model
					$scope.fruitCount = 0;


					$scope.fruits = fruitData.getAllFruits();

			}]);
}());