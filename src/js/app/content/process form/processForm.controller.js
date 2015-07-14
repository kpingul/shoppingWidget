/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('processFormCtrl', ['$scope','userData', function($scope, userData) {
			$scope.formData = {};

			//default since option selected isn't working

			
		
			$scope.usersData = userData.getListItems();
			$scope.disabledNext = true;
			$scope.disabledForm = true;
			$scope.profileValid = false;
			$scope.orderSubmit = false;
			
			$scope.deleteAllFruit = function(fruitName, fruitCount, fruitPrice){

				userData.deleteUsersFruit(fruitName, fruitCount, fruitPrice);
		
			

			}


			$scope.updateEditedCheckoutOrder = function(fruitName, newFruitCount, newFruitPrice) {
				//communicate with user data service to update the uers total checkout price and count
				console.log(fruitName, newFruitCount);
				userData.setNewUserData(fruitName, newFruitCount, newFruitPrice);

			}

			$scope.processForm = function(isValid){
				
				if(isValid){
					$scope.disabledForm = false;
					$scope.profileValid = true;
				}
				
			}

			
			$scope.submitOrder = function(name,total ){
				
				//separate business logic into service (abstraction)

				if(!name && total <= 0){
					alert('Must fill out information and go shopping');
				} 
				else if(name && total <= 0){
					alert('Empty Cart');
					
				}else if(!name && total >= 0){
					alert('Must fill out information');
				}
				else if(name && total > 0){


					$scope.orderSubmit = true;
					userData.clearUsersData();
					$scope.usersData = [];
			
				}
				
				
				
			


			}
			$scope.checkForTotal = function(){
				if( userData.checkTotalPriceAndCount() ){

					$scope.disabledNext = false;
					return true; 
				}
			}


		}]);

}());