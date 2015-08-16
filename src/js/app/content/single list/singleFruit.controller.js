/* Single Fruit Controller */

(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitCtrl', ['$scope', 'SingleFruit', 'userData', 'fruitData','$timeout','$state', function($scope, SingleFruit, userData, fruitData, $timeout,$state) {
					
					var fruit = this;

					fruit.singleFruit = SingleFruit;
					fruit.singleFruit.fruitCount = 'QTY'  				
   					fruit.id = SingleFruit.id;
   					fruit.editing = false;
   					var delaySpeed = 200;
   					var processForm = 'processForm';
  	
					fruit.addToCart = function(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription) {	
						$timeout(function() {

							userData.setCheckout(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription);
							
							$state.go(processForm, {});

						}, delaySpeed)

					}
				

				
			}]);

}());