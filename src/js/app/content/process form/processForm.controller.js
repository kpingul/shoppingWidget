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
			$scope.formData.submittedForm = userData.getFormValidation();
			$scope.subTotal = userData.getTotalPrice();
			$scope.totalItems = userData.getItemCount();
			$scope.usersData = userData.getListItems();
			$scope.submitting = false;
			$scope.finalCheckoutOrder = false;


			$scope.processForm = function(isValid){
				
				if(isValid){
					  
					$scope.submitting = true;
				    
				    $timeout(function() {
				    	$scope.submitting = false;;

						userData.setUserInformation($scope.formData.userName, $scope.formData.userEmail, $scope.formData.userCity);
						$scope.formData.submittedForm = userData.getFormValidation();

					}, 1200);
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
