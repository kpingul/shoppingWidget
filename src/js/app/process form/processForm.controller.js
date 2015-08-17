/* Process form controller */

(function() {

	'use strict';

	angular.module('myApp')

		.controller('ProcessFormCtrl', ['$scope','userData','$timeout', function($scope, userData, $timeout) {
			var processForm = this;

			/*User Personal Information */
			
			processForm.formData = {

				userName: userData.getName(),
				userEmail: userData.getEmail(),
				userCity: userData.getCity(),
				shipping: userData.getShipping(),
				submittedForm: userData.getFormValidation()
			}

			processForm.usersData = userData.getListItems();
			processForm.totalItems = userData.getItemCount();
			processForm.subTotal = userData.getTotalPrice();
			processForm.totalCalculated = userData.getTotalCalculatedPrice();
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
