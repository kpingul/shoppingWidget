/* User List Item Directive */

(function(){

		'use strict';

		angular.module('myApp')

			.directive('userlistitems', function(){

				return {

					restrict: 'E',

				

					templateUrl: 'src/js/app/content/process form/processForm.fruitlist.tpl.html'


				}

			})

}());