/* Navigation directive */

( function() {

	'use strict';

		angular.module('myApp')

			.directive('navigation', function(){
				
				return {

					restrict: 'E',

					templateUrl: 'src/js/app/content/navigation/navigation.tpl.html'


				}

			});

}());