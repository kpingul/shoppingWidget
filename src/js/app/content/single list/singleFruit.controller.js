/* Single Fruit Controller */

(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitCtrl', ['$scope', '$stateParams', 'userData', 'fruitData','$timeout','$modal', function($scope, $stateParams, userData, fruitData, $timeout, $modal) {
					
					$scope.singleFruit = fruitData.getSingleFruit($stateParams.id);
					$scope.singleFruit.fruitCount = 'QTY'
				
   					$scope.isDisabled = false;
   					$scope.alert = false;
   					$scope.selectable = false;
   					$scope.id = $stateParams.id;


   		

   				
					$scope.addToCart = function(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription) {	

						if(fruitCount <= 0 || isNaN(fruitCount)){

							return false;

						}else{
							$scope.loading = true; // start loading
							
							 	 $timeout(function() {
										 	   
										$scope.loading = false; // stop loading

										$scope.selectable = true;

										$scope.isDisabled = true;
								

										userData.setCheckout(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription);
										$('#myModal').foundation('reveal', 'open');
							  }, 1000);

						}
					}

				
			}]);

}());