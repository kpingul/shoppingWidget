(function(){

	'use strict';

	angular.module('slickSlider', [])

		.directive('slickerCarousel', function(){

			return {

				restrict: 'E',

				templateUrl: 'src/js/app/shared/slickCarousel.tpl.html',

				link: function(scope, elem, attrs){

						//Activate slick carousell
					
						$('.carousels').slick({
					
							  centerPadding: '60px',
							  slidesToShow: 4,
							  autoplay: true,
							  dots: true,
							  autoplaySpeed: '3300',
		

							  responsive: [
							    {
							      breakpoint: 768,
							      settings: {
						          arrows: true,
						          centerPadding: '40px',
						          slidesToShow: 3,
				
							      }
							    },
							    {
							      breakpoint: 480,
							      settings: {
							      arrows: false,
							      dots: false,	       
							      centerPadding: '40px',
							       slidesToShow: 3,
				
							      }
							    }
							  ]
						});
						      


				}

			};	
		})


}());