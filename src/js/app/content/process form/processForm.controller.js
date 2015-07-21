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
			

			$scope.processForm = function(isValid){
				
				if(isValid){
					  
					$scope.submitting = true;
						
				    $timeout(function() {

						   $scope.submitting = false; // stop loading

							userData.setUserInformation($scope.formData.userName, $scope.formData.userEmail, $scope.formData.userCity);

							$scope.disabledForm = false;

							$scope.profileValid = true;

					}, 2000);
				}
				
			}


			$scope.checkForTotal = function(){

				if( userData.checkTotalPriceAndCount() ) {

					$scope.disabledNext = false;

					return true; 

				}
			}



			$scope.submitOrder = function(fruits, name,total ){

				 $scope.checkout = true;
					
					$timeout(function() {

					   $scope.checkout = false; // stop loading

						$scope.orderSubmit = true;

						fruits.splice(0, fruits.length - 1);

						userData.clearUsersData();
					

					}, 3000);
				

			}



		}]);

}());
