/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('ProcessFormCtrl', ['$scope','userData','$timeout', function($scope, userData, $timeout) {
			var processForm = this;

			/*User Personal Information */
			
			processForm.formData = {}
			processForm.formData.userName = userData.getName();
			processForm.formData.userEmail = userData.getEmail();
			processForm.formData.userCity = userData.getCity();
			processForm.formData.shipping = userData.getShipping();
			processForm.formData.submittedForm = userData.getFormValidation();
			processForm.subTotal = userData.getTotalPrice();
			processForm.totalCalculated = userData.getTotalCalculatedPrice();
			processForm.totalItems = userData.getItemCount();
			processForm.usersData = userData.getListItems();
			processForm.submitinfo = false;
			processForm.checkout = false;
			processForm.finalCheckoutOrder = false;


			processForm.processForm = function(isValid){
				
				if(isValid){
	
				    processForm.submitinfo = true;
				    $timeout(function() {
				    	
				    	processForm.submitinfo = false;
						userData.setUserInformation(processForm.formData.userName, processForm.formData.userEmail, processForm.formData.userCity);
						processForm.formData.submittedForm = userData.getFormValidation();

					}, 1200);
				}
				
			}


			processForm.submitOrder = function(){

				processForm.checkout = true;

				$timeout(function() {

					processForm.checkout = false;
					processForm.finalCheckoutOrder = true;

					//CLEAR DATA

					userData.clearData();


				}, 3000);


			}



			$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
				if(toState.url === '/payment') {

					processForm.totalCalculated  = userData.getTotalCalculatedPrice();
					
				}
			});
		

		}]);

}());
