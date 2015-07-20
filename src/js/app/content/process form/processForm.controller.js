/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('ProcessFormCtrl', ['$scope','userData', function($scope, userData) {
			
			$scope.formData = {}
			$scope.formData.userName = userData.getName();
			$scope.formData.userEmail = userData.getEmail();
			$scope.formData.userCity = userData.getCity();
			
			$scope.subTotal = userData.getTotalPrice();
			$scope.totalItems = userData.getItemCount();
			$scope.usersData = userData.getListItems();
			$scope.disabledNext = true;
			$scope.disabledForm = true;
			$scope.profileValid = false;
			$scope.orderSubmit = false;
		
			
			$scope.deleteAllFruit = function(fruits, fruit, id){
			

				userData.deleteUsersFruit(fruit, id);
		
		
			}


			$scope.updateEditedCheckoutOrder = function(fruit, newFruitCount, id) {
	
				userData.setNewUserData(fruit, newFruitCount, id);

			}

			$scope.processForm = function(isValid){
				
				if(isValid){
				

					userData.setUserInformation($scope.formData.userName, $scope.formData.userEmail, $scope.formData.userCity);
					$scope.disabledForm = false;
					$scope.profileValid = true;
				}
				
			}


			$scope.checkForTotal = function(){
				if( userData.checkTotalPriceAndCount() ){

					$scope.disabledNext = false;
					return true; 
				}
			}



			$scope.submitOrder = function(fruits, name,total ){
			
				
					$scope.orderSubmit = true;
					fruits.splice(0, fruits.length - 1);

					userData.clearUsersData();

			}



		}]);

}());