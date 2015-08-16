(function () {

	'use strict';

		angular.module('myApp')

			.controller('singleFruitEditingCtrl', ['$scope', 'EditingFruit','FruitCount','ItemInCardId', 'userData','$timeout','$state', function($scope, EditingFruit ,FruitCount, ItemInCardId, userData, $timeout, $state) {
					
					var fruitEditing = this;	


					fruitEditing.singleFruit = EditingFruit;
					fruitEditing.singleFruit.count = FruitCount;
					var ItemId = ItemInCardId;
					var delaySpeed = 300;

   					fruitEditing.addCount = function(){

						fruitEditing.add = true; // start loading

						$timeout(function() {

							    fruitEditing.add = false; // stop loading

							    fruitEditing.singleFruit.count++;

						}, delaySpeed);

   					}
   					fruitEditing.subtractCount = function(){

						 fruitEditing.subtract = true; // start loading

						 $timeout(function() {

							 fruitEditing.subtract = false; // stop loading


							 if(fruitEditing.singleFruit.count <= 0){

							    	return;

						      }

							 fruitEditing.singleFruit.count--;

						  
						}, delaySpeed);

   					}

					fruitEditing.saveChangesToCart = function(editCount) {
						//update fruit using user service 
						userData.setNewUserData(ItemId, editCount);

						$state.go('processForm', {});

					}
					fruitEditing.deleteChangesToCart = function(singleFruit) {
						//delete fruit using user service 
						userData.deleteUsersFruit(singleFruit, ItemId);

						$state.go('processForm', {});

					}
				
			}]);

}());