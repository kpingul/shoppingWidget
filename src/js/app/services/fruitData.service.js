/* Fruit Data Service */		

(function() {
	
		angular.module('myApp')

			.factory('fruitData', function() {
			 	
				var fruits = {}

				fruits.fruit = [
								{
									name: 'Orange',
									image: 'src/images/orange.jpg',
									price: 1.90,
									description: 'High in Vitamin C'

								},
								
								{
									name: 'Kiwi',
									image: 'src/images/kiwi.jpg',
									price: 1.20,
									description: 'High in Vitamin K'

								},
								
								{
									name: 'Banana',
									image: 'src/images/bananna.jpg',
									price: 0.90,
									description: 'High in Vitamin C and Fiber'

								},
								{
									name: 'Watermelon',
									image: 'src/images/watermelon.jpg',
									price: 0.98,
									description: 'Potassium and Vitamin A'

								},
								{
									name: 'Pear',
									image: 'src/images/pear.jpg',
									price: 0.58,
									description: 'Vitamin D and Fiber'
								},
								{
									name: 'Mango',
									image: 'src/images/mango.jpg',
									price: 1.32,
									description: 'Calcium and Vitamin C'

								},	
								{
									name: 'Pineapple',
									image: 'src/images/pineapple.jpg',
									price: 2.30,
									description: 'Vitamin C and Vitamin A'

								},
								{
									name: 'Strawberry',
									image: 'src/images/strawberry.jpg',
									price: 4.43,
									description: 'Vitamin A and Fiber'

								},


								{
									name: 'blackberry',
									image: 'src/images/blackberry.jpg',
									price: 2.24,
									description: 'Vitamin A and Antioxidants'

								},
								{
									name: 'Coconut',
									image: 'src/images/coconut.jpg',
									price: 3.15,
									description: 'High in Fiber'
								},
								{
									name: 'Grapefruit',
									image: 'src/images/grapefruit.jpg',
									price: 1.05,
									description: 'Vitamin A and Vitamin C'

								},	
								{
									name: 'Raspberry',
									image: 'src/images/raspberry.jpg',
									price: 3.05,
									description: 'Vitamin B and Antioxidants'

								},
								{
									name: 'Papaya',
									image: 'src/images/papaya.jpg',
									price: 3.33,
									description: 'Vitamin B and Fiber'

								},


								{
									name: 'Cherry',
									image: 'src/images/cherry.jpg',
									price: 2.12,
									description: 'High in Fiber'
								},
								{
									name: 'Honeydew',
									image: 'src/images/honeydew.jpg',
									price: 3.25,
									description: 'Vitamin B and Vitamin C'

								},	
								{
									name: 'Peach',
									image: 'src/images/peach.jpg',
									price: 1.50,
									description: 'Vitamin A and High Fiber'

								},
								{
									name: 'Passionfruit',
									image: 'src/images/passionfruit.jpg',
									price: 3.33,
									description: 'Vitamin B and Fiber'

								}
								
						
				]

				fruits.getAllFruits = function(){

					return this.fruit; 
				}

				return fruits;

			});

}());