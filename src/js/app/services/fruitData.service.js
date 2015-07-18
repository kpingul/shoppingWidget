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
									description: 'High in Vitamin C',
									rating: 4,
									reviews: [
										{
											name: 'Person 1',
											title: 'Awesome Fruit!',
											review: 'I love Oranges!',
											rating: 4

										},
										{

											name: 'Person 2',
											title: 'Weird tasting fruit!',
											review: 'So tangy!',
											rating: 4

										},
										{

											name: 'Person 3',
											title: 'Not so sure why I wrote this!',
											review: "They're ok.",
											rating: 5

										}

									]

								},
								
								{
									name: 'Kiwi',
									image: 'src/images/kiwi.jpg',
									price: 1.20,
									description: 'High in Vitamin K',
									rating: 3,
									reviews: [
										{
											name: 'Person 1',
											review: "Kiwi's are so green and beautiful",
											title: 'Beautiful fruit',
											rating: 2

										},
										{

											name: 'Person 2',
											review: "Didn't know they had vitamin K, wait, what is vitamin K?",
											title: 'Vitamin K??',
											rating: 4
										},


									]

								},
								
								{
									name: 'Banana',
									image: 'src/images/bananna.jpg',
									price: 0.90,
									description: 'High in Vitamin C and Fiber',
									rating: 4,
									reviews: [
										{
											name: 'Person1',
											review: 'Saved me from a muscle pull the other day.',
											title: 'Potassium!!!',
											rating: 5
										},
										{

											name: 'Person2',
											review: 'Not going to lie, they are delicious!',
											title: 'Fruit of the century!',
											rating: 2
										},
										{

											name: 'Person3',
											review: 'Pretty darn good.',
											title: 'Person above me got way too excited about a fruit.',
											rating: 4
										}


									]

								},
								{
									name: 'Watermelon',
									image: 'src/images/watermelon.jpg',
									price: 0.98,
									description: 'Potassium and Vitamin A',
									rating: 4,
									reviews: [
										{
											name: 'Person1',
											review: 'So sweet!',
											title: 'Sugar pie honey bunch!',
											rating: 5
										},
										{

											name: 'Person2',
											review: 'Sweeter than sweet!',
											title: 'Water-Melon!',
											rating: 3
										}

									]

								},
								{
									name: 'Pear',
									image: 'src/images/pear.jpg',
									price: 0.58,
									description: 'Vitamin D and Fiber',
									rating: 5,
									reviews: [
										{
											name: 'Person1',
											review: 'Pear me up!',
											title: 'Pears are my thing!',
											rating: 5											
										},
										{

											name: 'Person2',
											review: 'I love pears!',
											title: 'Something about the fruit that just....',
											rating: 4
										},
										{
											name: 'Person3',
											review: 'So sweet!',
											title: 'Sugar pie honey bunch!',
											rating: 5
										}
									]
								},
								{
									name: 'Mango',
									image: 'src/images/mango.jpg',
									price: 1.32,
									description: 'Calcium and Vitamin C',
									rating: 2,
									reviews: [
										{
											name: 'Person1',
											review: 'Mangogogo!',
											title: 'Such an awesome fruit!',
											rating: 3
										},
										{

											name: 'Person2',
											review: 'EHHHH..',
											title: "Here's my two cents!",
											rating: 1
										}

									]

								},	
								{
									name: 'Pineapple',
									image: 'src/images/pineapple.jpg',
									price: 2.30,
									description: 'Vitamin C and Vitamin A',
									rating: 5,
									reviews: [
										{
											name: 'Person1',
											review: 'Pine + Apple = PineApple',
											title: 'So dangerous, yet so good.',
											rating: 4
										},
										{

											name: 'Person2',
											review: 'Not so bad..',
											title: 'Pineapple me crazy!',
											rating: 5
										},
										{
											name: 'Person3',
											review: "I love Pineapples!",
											title: 'L.O.V.E',
											rating: 5
										},
										{
											name: 'Person4',
											review: 'Pineapples are just so good!',
											title: 'AGREE!',
											rating: 5

										}

									]

								},
								{
									name: 'Strawberry',
									image: 'src/images/strawberry.jpg',
									price: 4.43,
									description: 'Vitamin A and Fiber',
									rating: 4,
									reviews: [
										{
											name: 'Person1',
											review: "To be honest, they're ok",
											title: 'Not my type',
											rating: 3
										},
										{

											name: 'Person2',
											review: 'Totally delicious!',
											title: 'O.M..',
											rating: 5
										}

									]

								},


								{
									name: 'blackberry',
									image: 'src/images/blackberry.jpg',
									price: 2.24,
									description: 'Vitamin A and Antioxidants',
									rating: 1,
									reviews: [
										{
											name: 'Person1',
											review: 'So fresh and so clean!',
											title: 'Cleansing my system with these babies',
											rating: 3
										},
										{

											name: 'Person2',
											review: 'EHHHHHHH.',
											title: 'Not so good.',
											rating: 1
										},
										{
											name: 'Person3',
											review: 'A little too bland for my taste',
											title: 'Not a fan',
											rating: 1
										},
										{
											name: 'Person4',
											review: "Not a fan as well",
											title: 'Person 2, I salute you friend',
											rating: 1
										}

									]

								},
								{
									name: 'Coconut',
									image: 'src/images/coconut.jpg',
									price: 3.15,
									description: 'High in Fiber',
									rating: 5,
									reviews: [
										{
											name: 'Person1',
											review: 'Call me CocoCrazy!',
											title: 'So goooooood!',
											rating: 5
										},
										{

											name: 'Person2',
											review: 'The juice is the best!',
											title: 'The juice of choice!',
											rating: 5
										}

									]
								},
								{
									name: 'Grapefruit',
									image: 'src/images/grapefruit.jpg',
									price: 1.05,
									description: 'Vitamin A and Vitamin C',
									rating: 2,
									reviews: [
										{
											name: 'Person1',
											review: 'A little to bitter',
											title: 'B.I.T.T.E.R',
											rating: 2
										},
										{

											name: 'Person2',
											review: 'Never find the right one',
											title: 'Not much of a fan',
											rating: 2
										}

									]

								},	
								{
									name: 'Raspberry',
									image: 'src/images/raspberry.jpg',
									price: 3.05,
									description: 'Vitamin B and Antioxidants',
									rating: 3,
									reviews: [
										{
											name: 'Person1',
											review: "Such as gorgeous fruit",
											title: 'So beautiful',
											rating: 4
										},
										{

											name: 'Person2',
											review: 'Pretty good',
											title: 'Sweet and sour!',
											rating: 3
										},
										{
											name: 'Person3',
											review: "Such as gorgeous fruit x 2",
											title: 'So beautiful x 2',
											rating: 3
										},
										{

											name: 'Person4',
											review: 'Such a delicious fruit',
											title: 'One of the better berries',
											rating: 3
										}


									]

								},
								{
									name: 'Papaya',
									image: 'src/images/papaya.jpg',
									price: 3.33,
									description: 'Vitamin B and Fiber',
									rating: 5,
									reviews: [
										{
											name: 'Person1',
											review: "Haven't had any lately until now, and they're aren't so bad",
											title: 'First attemp in awhile',
											rating: 5	
										},
										{

											name: 'Person2',
											review: 'Smoooth',
											title: 'Such a nice fruit',
											rating: 5
										}

									]

								},


								{
									name: 'Cherry',
									image: 'src/images/cherry.jpg',
									price: 2.12,
									description: 'High in Fiber',
									rating: 2,
									reviews: [
										{
											name: 'Person1',
											review: 'Not a fan',
											title: 'If they were only a little bigger',
											rating: 3
										},
										{

											name: 'Person2',
											review: 'Not my fruit of choice',
											title: 'Not bad',
											rating: 1
										},
										{
											name: 'Person3',
											review: 'Fiberous',
											title: 'Brilliant fruit!',
											rating: 1
										}

									]
								},
								{
									name: 'Honeydew',
									image: 'src/images/honeydew.jpg',
									price: 3.25,
									description: 'Vitamin B and Vitamin C',
									rating: 4,
									reviews: [
										{
											name: 'Person1',
											review: 'Awesome fruit!',
											title: 'So goooooooooood!',
											rating: 4
										},
										{

											name: 'Person2',
											review: 'Delicious',
											title: 'One of the better fruits',
											rating: 4
										},
										{
											name: 'Person3',
											review: 'Pretty good',
											title: 'G.O.O.D',
											rating: 4
										},
										{
											name: 'Person4',
											review: 'I like honeydew',
											title: 'Amazing',
											rating: 3
										},
										{
											name: 'Person5',
											review: 'Delicious fruit',
											title: 'Great fruit!',
											rating: 4
										}

									]

								},	
								{
									name: 'Peach',
									image: 'src/images/peach.jpg',
									price: 1.50,
									description: 'Vitamin A and High Fiber',
									rating: 5,
									reviews: [
										{
											name: 'Person1',
											review: 'So goood!',
											title: 'So Peachy!',
											rating: 5
										},
										{

											name: 'Person2',
											review: 'Love them!',
											title: 'O.M.Peach',
											rating: 5
										}

									]

								},
								{
									name: 'Passionfruit',
									image: 'src/images/passionfruit.jpg',
									price: 3.33,
									description: 'Vitamin B and Fiber',
									rating: 2,
									reviews: [
										{
											name: 'Person1',
											review: 'Not so good',
											title: 'Bland....',
											rating: 1
										},
										{

											name: 'Person2',
											review: 'Agreed with Person1',
											title: 'ehhhhh',
											rating: 2
										}

									]

								}
								
						
				]

				fruits.getAllFruits = function(){

					return this.fruit; 
				}
				fruits.getSingleFruit = function(indexOfFruit){

					return this.fruit[indexOfFruit];

				}

				return fruits;

			});

}());