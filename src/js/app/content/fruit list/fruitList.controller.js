/* Single fruit Controller */


(function (){

	'use strict';

		angular.module('myApp')

			.controller('fruitListCtrl', ['$scope', 'FruitList', 'userData', function($scope, FruitList, userData) {

					var fruitList = this;


					//fruit array to hold each fruit object
					fruitList.fruits = []

					//default fruitCount model
					fruitList.fruitCount = 0;

					fruitList.fruits = FruitList;

					fruitList.addFruit = function(fruit){
						
						userData.addSingleFruit(fruit);

					}

			}]);
}());