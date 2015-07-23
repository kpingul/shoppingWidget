/*Add fruit Directive */


(function (){

	'use strict';

	angular.module('myApp')

		.directive('addFruitIcon', function(){


			return {

				restrict: 'A',

				link: function(scope, elem, attrs){

					elem.on('mouseover', function(event){

						
							console.log('enter');
						elem.find('i').removeClass('hides');
				


					})

					elem.on('mouseleave', function(event){

						
						elem.find('i').addClass('hides');
			
				


					})

					elem.on('click', function(event){
						if(event.target.nodeName === 'I'){
							event.preventDefault()

						}
					})


				}
			};

		});

}());