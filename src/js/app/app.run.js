(function (){

	'use strict';


	angular.module('myApp')

		.run(["$rootScope", "$anchorScroll", function ($rootScope, $anchorScroll) {


			$rootScope.$on("$stateChangeSuccess", function() {

				//Scroll to top as soon as the page loads
					$('html, body').animate({scrollTop: 0}, 0)


			});


		}]);


}());