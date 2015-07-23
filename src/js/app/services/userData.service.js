/* User Data Service */		

( function() {

	'use strict';

		angular.module('myApp')

			.factory('userData', ['$rootScope', function($rootScope) {


				//object to hold the users checkout total data inlcluding all items added to shopping cart
				var usersData = {

					name: '',

					email: '',

					city: '',

					totalItemCount: 0,

					totalPrice:  0,

					items: []

				}

				//holds an array of fruit objects added to users shopping cart
				var allUsersData = []

				//checks for duplicates 

				usersData.findFruitDuplicate = function(fruitName){

					for(var i = 0; i < usersData.items.length; i++){
						
						if(fruitName === usersData.items[i].fruit){

							console.log('duplicate found');

							return true;
						}

					}
					return false;
				}

				usersData.addFruitDuplicate = function(name, count, price){

							var parsedFruitCount = parseInt(count);

							var parsedFruitPrice = parseInt(price);

							for(var i = 0; i < usersData.items.length; i++){

								if(name === usersData.items[i].fruit){
										
										usersData.items[i].fruitCount += parsedFruitCount;
										usersData.items[i].fruitPrice += (usersData.items[i].originalPrice * parsedFruitCount);

										this.totalItemCount += parsedFruitCount;

										this.totalPrice += 	(usersData.items[i].originalPrice * parsedFruitCount)

										
										this.broadCast();

								}

							}

				}

				usersData.getFruitDuplicate = function(fruitName){

						for(var i = 0; i < usersData.items.length; i++){

								if(name === usersData.items[i].fruit){
										
										return userData.items[i];

								}

							}

				}

				//creates a new fruit object and passes it into the allUsersData array
				usersData.setCheckout = function(id, fruitName, fruitImg, fruitCount, fruitTotalPrice, fruitDescription){
						
				
						//parses fruitCount to integer because it was a string
						var parsedFruitCount = parseInt(fruitCount);
						
						
						if( parsedFruitCount <= 0 || usersData.findFruitDuplicate(fruitName) ){
							
							usersData.addFruitDuplicate(fruitName, fruitCount, fruitTotalPrice);

							

						}else{
							
							this.totalItemCount += parsedFruitCount;

							this.totalPrice += fruitTotalPrice * parsedFruitCount;

							//creates a fruit object that contains the total amount requested by
							//shopper and total price for that fruit and its total including
							//the count requested

							var newUserData = {
								id: id,

								fruit: fruitName,

								image: fruitImg,

								fruitCount: parsedFruitCount,

								fruitPrice: fruitTotalPrice * parsedFruitCount,

								originalPrice: fruitTotalPrice,

								description: fruitDescription

							}

							//pushes all requested fruits into array
							//creating an array of fruit objects
							allUsersData.push(newUserData);

							//creates a new array property  within usersData object as 
							//an array of requested fruit objects
							usersData.items = allUsersData;

							//broadcast updated values from usersData to controllers 	
							this.broadCast();

							console.log(usersData);
							
						}
				}



				usersData.deleteUsersFruit = function(fruit , id){
   
					console.log(fruit, id);
				
					var cacheFruitCount = this.items[id].fruitCount;
					var cachePrice = this.items[id].fruitPrice;


					usersData.items.splice(id, 1);
					
					this.totalItemCount -= cacheFruitCount

					this.totalPrice -= cachePrice;

					 
					this.broadCast();

					

				}

				/* Setter Methods */

				usersData.setNewUserData = function(id, newFruitCount) {
					//newFruitCount in input needed to be parsed to a number since it was a string


						var parsedFruitCount = parseInt(newFruitCount);
						var cacheFruitCount = this.items[id].fruitCount;
						var cachePrice = this.items[id].fruitPrice;

						console.log(this.items);
						//checks for validation of checkout order


						if(newFruitCount === 0 ){

							this.items.splice(id, 1);
							this.totalItemCount -= (cacheFruitCount);
							this.totalPrice -= cachePrice;
						
							this.broadCast();
							return;
						}


						//checks if the fruitname is equal to AND if the fruitcount is equal to the curent fruit count
						if(usersData.items[id] & usersData.items[id].fruitCount == parsedFruitCount) {

							

							this.broadCast();

						}


						//checks if the fruitname is equal to AND if the current fruitcount is greater than the original fruitcount 
						if(usersData.items[id] && parsedFruitCount > usersData.items[id].fruitCount ) {
					
							//subtracts the current price so that the new price wont double

							this.totalPrice -= (usersData.items[id].fruitPrice);
							this.totalItemCount -= usersData.items[id].fruitCount;

							//updates user data or each individual fruit object and total pricing

							usersData.items[id].fruitCount = parsedFruitCount;
							usersData.items[id].fruitPrice = (usersData.items[id].originalPrice * parsedFruitCount);

							
							//update total price and total amount of this user data
							this.totalItemCount += usersData.items[id].fruitCount;
							this.totalPrice += (usersData.items[id].originalPrice * parsedFruitCount);
							
							this.broadCast();
						}

						
						//checks if the fruitname is equal to AND if the current fruitcount is less than the original fruitcount 
						if(usersData.items[id] && parsedFruitCount < usersData.items[id].fruitCount ) {
				
							//subtracts the current price so that the new price wont double

							this.totalPrice -= (usersData.items[id].fruitPrice);
							this.totalItemCount -= usersData.items[id].fruitCount;

							//updates user data or each individual fruit object and total pricing

							usersData.items[id].fruitCount = parsedFruitCount;
							usersData.items[id].fruitPrice = (usersData.items[id].originalPrice * parsedFruitCount);

							
							//update total price and total amount of this user data
							this.totalItemCount += (usersData.items[id].fruitCount);
							this.totalPrice += (usersData.items[id].originalPrice * parsedFruitCount);

							this.broadCast();
						}

		
						
					

				}


				usersData.setUserInformation = function(name, email, city){

					this.name = name;
					this.email = email;
					this.city = city;
				}

				usersData.enableEditing = function(id){

					this.items[id].editing = true;
					console.log(id);
				}

				usersData.clearUsersData = function(){
						

					
					for( var i = 0; i < usersData.items.length; i++){
						usersData.items.splice(i, 1);

					}

					this.totalItemCount = 0;
					this.totalPrice = 0;
					this.name = '';
					this.email = '';
					this.city = '';
					this.broadCast();

				}

		
				/* Getter Methods */
				
				usersData.getTotalPrice = function(){

					return this.totalPrice;

				}

				usersData.getItemCount = function() {

					return this.totalItemCount;

				}

				usersData.checkTotalPriceAndCount = function(){
					
					if(this.totalPrice <= 0 || this.totalItemCount <= 0){

						return false;

					}else{

						return true;
					}
				}

				usersData.getAllUsersData = function() {

					//return a user object with all current data

					return usersData;

				}

				usersData.getListItems = function(){

					return this.items;
				}

				usersData.getName = function(){

					return this.name;
				}

				usersData.getEmail = function(){

					return this.email;
				}

				usersData.getCity = function(){

					return this.city;
				}


				usersData.broadCast = function(){

					
					$rootScope.$broadcast('handleBroadCast');
				}

				usersData.addSingleFruit = function(fruit){
					



		
						
						
						if( usersData.findFruitDuplicate(fruit.name) ){
							
							usersData.addFruitDuplicate(fruit.name, 1, fruit.price);

							

						}else{
							
							
							this.totalItemCount += 1;

							this.totalPrice += fruit.price;

							//creates a fruit object that contains the total amount requested by
							//shopper and total price for that fruit and its total including
							//the count requested

							var newUserData = {
								id: fruit.id,

								fruit: fruit.name,

								image: fruit.image,

								fruitCount: 1,

								fruitPrice: fruit.price,

								originalPrice: fruit.price,

								description: fruit.description

							}

						
							usersData.items.push(newUserData);
					
							//broadcast updated values from usersData to controllers 	
							this.broadCast();
							console.log(usersData.items);
							
						}





































				}


				return usersData;

		}]);
}());
