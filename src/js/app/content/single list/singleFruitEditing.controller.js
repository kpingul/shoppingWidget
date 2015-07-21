(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitEditingCtrl', ['$scope', '$stateParams', 'userData', 'fruitData','$timeout','$state', function($scope, $stateParams, userData, fruitData, $timeout,$state) {
					
					$scope.singleFruit = fruitData.getSingleFruit($stateParams.id);
						
   					$scope.addCount = function(){
					 $scope.add = true; // start loading
						  $timeout(function() {
						    $scope.add = false; // stop loading
						    $scope.singleFruit.fruitCount++;
						  }, 500);

   					}
   					$scope.subtractCount = function(){
						 $scope.subtract = true; // start loading
						  $timeout(function() {
						    $scope.subtract = false; // stop loading

						    if($scope.singleFruit.fruitCount <= 0){
						    	return;

						    }
						    	$scope.singleFruit.fruitCount--;
						  
						  }, 500);

   					}

   					$scope.saveChangesToCart = function(editCount){

   			
   						 $scope.saving = true; // start loading	
						  $timeout(function() {

						    $scope.saving = false;
   							userData.setNewUserData($stateParams.fruitId, editCount);
						  $state.go('processForm', {});
						  }, 1300);
   					}
   					$scope.deleteChangesToCart = function(singleFruit){
   						 $scope.deleting = true; // start loading	
						  $timeout(function() {

						    $scope.deleting = false;
   							userData.deleteUsersFruit(singleFruit,$stateParams.fruitId );
   							
						  $state.go('processForm', {});
						  }, 1300);

   					
   					}

   			
				
			}]);

}());