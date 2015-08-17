/* Single fruit Controller */


(function (){

	'use strict';

		angular.module('myApp')

			.controller('fruitListCtrl', ['$scope', 'FruitList', 'userData', function($scope, FruitList, userData) {

					var fruitList = this;

					fruitList.fruits = FruitList;
				
				
			}]);
}());