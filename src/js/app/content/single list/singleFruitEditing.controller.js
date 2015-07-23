(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitEditingCtrl', ['$scope', '$stateParams', 'userData', 'fruitData','$timeout','$state', function($scope, $stateParams, userData, fruitData, $timeout,$state) {
				
					$scope.singleFruit = fruitData.getSingleFruit($stateParams.id);
					$scope.singleFruit.count = $stateParams.count;


   					$scope.addCount = function(){

						$scope.add = true; // start loading

						$timeout(function() {

							    $scope.add = false; // stop loading

							    $scope.singleFruit.count++;

						}, 500);

   					}
   					$scope.subtractCount = function(){

						 $scope.subtract = true; // start loading

						 $timeout(function() {

							 $scope.subtract = false; // stop loading


							 if($scope.singleFruit.fruitCount <= 0){

							    	return;

						      }

							    	$scope.singleFruit.count--;

						  
						}, 500);

   					}

   					$scope.saveChangesToCart = function(editCount){

   			
   						 $scope.saving = true; // start loading	

						 $timeout(function() {


						    $scope.saving = false;

	 						 //update fruit using user service 
   							userData.setNewUserData($stateParams.fruitId, editCount);

						  	$state.go('processForm', {});

						  }, 300);
   					}
   					$scope.deleteChangesToCart = function(singleFruit){

   						 $scope.deleting = true; // start loading

							  $timeout(function() {

							  $scope.deleting = false;

	   						  //delete fruit using user service 
	   						  userData.deleteUsersFruit(singleFruit, $stateParams.fruitId );

	   						
							  $state.go('processForm', {});

						  }, 300);

   					
   					}

   			
				
			}]);

}());