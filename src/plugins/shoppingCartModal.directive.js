(function(){

	'use strict';

	angular.module('shoppingModal', [])

		.directive('shoppingCartModal', function(){

			return {

				restrict: 'E',

				

				templateUrl: 'src/plugins/shoppingCartModal.tpl.html',

				link: function(scope, el, attrs){

					
					$(document).foundation();
				


				}

			};	
		})


}());