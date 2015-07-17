/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('processFormCtrl', ['$scope','userData', function($scope, userData) {
			$scope.formData = {}
			$scope.formData.userName = userData.getName();
			$scope.formData.userEmail = userData.getEmail();
			$scope.formData.userCity = userData.getCity();
			//default since option selected isn't working

			
		
			$scope.usersData = userData.getListItems();
			$scope.disabledNext = true;
			$scope.disabledForm = true;
			$scope.profileValid = false;
			$scope.orderSubmit = false;
		
			
			$scope.deleteAllFruit = function(fruits, fruit, id){
			

				userData.deleteUsersFruit(fruit, id);
		
			

			}


			$scope.updateEditedCheckoutOrder = function(fruit, newFruitCount, id) {
				//communicate with user data service to update the uers total checkout price and count
				console.log(fruit, newFruitCount, id);
				userData.setNewUserData(fruit, newFruitCount, id);

			}

			$scope.processForm = function(isValid){
				
				if(isValid){
				

					userData.setUserInformation($scope.formData.userName, $scope.formData.userEmail, $scope.formData.userCity);
					$scope.disabledForm = false;
					$scope.profileValid = true;
				}
				
			}

	
			
			$scope.submitOrder = function(fruits, name,total ){
				
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

					fruits.splice(0, fruits.length - 1);

					$scope.orderSubmit = true;
					userData.clearUsersData();
					
			
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