/* Single Fruit Controller */

(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitCtrl', ['$scope', '$stateParams', 'userData', 'fruitData', function($scope, $stateParams, userData, fruitData) {
					
					$scope.singleFruit = fruitData.getSingleFruit($stateParams.id);
					$scope.singleFruit.fruitCount = 'QTY'
				
   					$scope.isDisabled = false;
   					$scope.alert = false;
   					$scope.selectable = false;
   					$scope.id = $stateParams.id;


   		

   				
					$scope.addToCart = function(fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription) {	

						if(fruitCount <= 0 || isNaN(fruitCount)){

							return false;

						}else{

							$scope.selectable = true;

							$scope.alert = true;

							userData.setCheckout(fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription);

							$scope.isDisabled = true;



						}
					}

				
			}]);

}());