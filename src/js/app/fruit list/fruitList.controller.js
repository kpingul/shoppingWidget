/* Single fruit Controller */


(function (){

	'use strict';

		angular.module('myApp')

			.controller('fruitListCtrl', ['$scope', 'FruitList', function($scope, FruitList) {

					var fruitList = this;
					

					fruitList.fruits = FruitList;
				
				
			}]);
}());