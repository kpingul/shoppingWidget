/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('ProcessFormCtrl', ['$scope','userData','$timeout', function($scope, userData, $timeout) {
			/*User Personal Information */
			
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
			
			// $scope.$watch('subTotal', function(){
			// 	$scope.$apply(function(){
			
<<<<<<< HEAD

			// 	});
			// })
			$scope.enableEditing = function(id){

				 userData.enableEditing(id);

			}
			
			$scope.deleteAllFruit = function(fruits, fruit, id){
			
				

				userData.deleteUsersFruit(fruit, id);

				$scope.subTotal = userData.getTotalPrice();

				$scope.totalItems = userData.getItemCount();

		
=======
		

			         userData.deleteUsersFruit(fruit, id);

				 $scope.subTotal = userData.getTotalPrice();

			         $scope.totalItems = userData.getItemCount();

	
>>>>>>> 3d9841369129899b7a1db78e91a53ddb47b26318
		
			}


			$scope.updateEditedCheckoutOrder = function(fruit, newFruitCount, id) {
				
				
<<<<<<< HEAD

			        $scope.updating = false; // stop loading
=======
>>>>>>> 3d9841369129899b7a1db78e91a53ddb47b26318

				userData.setNewUserData(fruit, newFruitCount, id);

				$scope.subTotal = userData.getTotalPrice();

			        $scope.totalItems = userData.getItemCount();

<<<<<<< HEAD
	
=======
			
>>>>>>> 3d9841369129899b7a1db78e91a53ddb47b26318
				

			}

			$scope.processForm = function(isValid){
				
				if(isValid){
				

					userData.setUserInformation($scope.formData.userName, $scope.formData.userEmail, $scope.formData.userCity);

					$scope.disabledForm = false;

					$scope.profileValid = true;
				}
				
			}


			$scope.checkForTotal = function(){

				if( userData.checkTotalPriceAndCount() ) {

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
