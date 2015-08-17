/* Navigation directive */

( function() {

	'use strict';

		angular.module('myApp')

			.directive('navigation', function(){
				
				return {

					restrict: 'E',

					templateUrl: 'src/js/app/navigation/navigation.tpl.html'


				}

			});

}());