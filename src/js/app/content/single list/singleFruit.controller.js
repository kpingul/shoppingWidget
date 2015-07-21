/* Single Fruit Controller */

(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitCtrl', ['$scope', '$stateParams', 'userData', 'fruitData','$timeout','$state', function($scope, $stateParams, userData, fruitData, $timeout,$state) {
					
					$scope.singleFruit = fruitData.getSingleFruit($stateParams.id);
					$scope.singleFruit.fruitCount = 'QTY'
				
   			
   				
   					$scope.id = $stateParams.id;
   					$scope.editing = false;

   				

   				
					$scope.addToCart = function(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription) {	

						if(fruitCount <= 0 || isNaN(fruitCount)){

							return false;

						}else{
						
							
							 	 $timeout(function() {

										userData.setCheckout(id, fruitName, fruitImg, fruitCount, fruitPrice, fruitDescription);
										// $('#myModal').foundation('reveal', 'open');
										$state.go('processForm', {});
							  }, 900)

						}
					}

				
			}]);

}());