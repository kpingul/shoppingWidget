
( function() {

	'use strict';

		angular.module('myApp')

			.directive('updatefruit', function(){
				
				return function (scope, element, attrs) {

			        element.bind("keydown keypress", function (event) {

			            if(event.which === 13) {

			                scope.$apply(function () {
			                    scope.$eval(attrs.updatefruit);
			                });

			                event.preventDefault();
			            }

			      	 });
			  	};
			});

}());