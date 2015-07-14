/* Single Fruit Controller */

(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitCtrl', ['$scope', '$stateParams', 'userData', function($scope, $stateParams, userData) {
					

					
					$scope.fruitCount = 0;
					$scope.name = $stateParams.fruitName;
					$scope.image = $stateParams.fruitImg;
					$scope.price = $stateParams.fruitPrice;
					$scope.description = $stateParams.fruitDescription;
   					$scope.isDisabled = false;
   					$scope.alert = false;
   					$scope.selectable = false;


					$scope.addToCart = function(fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription) {	

						if(fruitCount <= 0){

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