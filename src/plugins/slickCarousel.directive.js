(function(){

	'use strict';

	angular.module('slickSlider', [])

		.directive('slickerCarousel', function(){

			return {

				restrict: 'E',

				templateUrl: 'src/plugins/slickCarousel.tpl.html',

				link: function(scope, el, attrs){

					
						$('.carousels').slick({
					
							  centerPadding: '60px',
							  slidesToShow: 3,
							  responsive: [
							    {
							      breakpoint: 768,
							      settings: {
							        arrows: true,
							        centerPadding: '40px',
							        slidesToShow: 3
							      }
							    },
							    {
							      breakpoint: 480,
							      settings: {
							        arrows: false,	       
							        centerPadding: '40px',
							        slidesToShow: 3
							      }
							    }
							  ]
						});
						      


				}

			};	
		})


}());