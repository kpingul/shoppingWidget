/* User Data Service */
(function() {

	'use strict';

	angular.module('myApp')

	.factory('userData', ['$rootScope',
		function($rootScope) {


			var service = {

				findFruitDuplicate: findFruitDuplicate,
				addFruitDuplicate: addFruitDuplicate,
				getFruitDuplicate: getFruitDuplicate,
				setCheckout : setCheckout,
				deleteUsersFruit: deleteUsersFruit,
				setNewUserData: setNewUserData,
				setUserInformation: setUserInformation,
				enableEditing: enableEditing,
				getTotalPrice: getTotalPrice,
				getItemCount: getItemCount,
				getAllUsersData: getAllUsersData,
				getListItems: getListItems,
				getName: getName,
				getEmail: getEmail,
				getCity: getCity,
				getFormValidation: getFormValidation,
				broadCast:  broadCast

			};


			//object to hold the users checkout total data inlcluding all items added to shopping cart
			var usersData = {

				name: '',

				email: '',

				city: '',

				validatedForm: false,

				totalItemCount: 0,

				totalPrice: 0,

				items: []

			}

			//holds an array of fruit objects added to users shopping cart
			var allUsersData = [];

			//checks for duplicates 

			function findFruitDuplicate (fruitName) {
				console.log('dup')
				for (var i = 0; i < usersData.items.length; i++) {

					if (fruitName === usersData.items[i].fruit) {

						console.log('duplicate found');

						return true;
					}

				}
				return false;
			}

			function addFruitDuplicate (name, count, price) {

				var parsedFruitCount = parseInt(count);

				var parsedFruitPrice = parseInt(price);

				for (var i = 0; i < usersData.items.length; i++) {

					if (name === usersData.items[i].fruit) {

						usersData.items[i].fruitCount += parsedFruitCount;
						usersData.items[i].fruitPrice += (usersData.items[i].originalPrice * parsedFruitCount);

						usersData.totalItemCount += parsedFruitCount;

						usersData.totalPrice += (usersData.items[i].originalPrice * parsedFruitCount)


						this.broadCast();

					}

				}

			}

			function getFruitDuplicate(fruitName) {

				for (var i = 0; i < usersData.items.length; i++) {

					if (name === usersData.items[i].fruit) {

						return userData.items[i];

					}

				}

			}

			//creates a new fruit object and passes it into the allUsersData array
			function setCheckout(id, fruitName, fruitImg, fruitCount, fruitTotalPrice, fruitDescription) {
	

				//parses fruitCount to integer because it was a string
				var parsedFruitCount = parseInt(fruitCount);


				if (parsedFruitCount <= 0 ||	findFruitDuplicate(fruitName)) {

					addFruitDuplicate(fruitName, fruitCount, fruitTotalPrice);



				} else {

					usersData.totalItemCount += parsedFruitCount;

					usersData.totalPrice += fruitTotalPrice * parsedFruitCount;

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



			function deleteUsersFruit(fruit, id) {

				var parsedFruitID = parseInt(id);

				var cacheFruitCount = usersData.items[parsedFruitID].fruitCount;
				var cachePrice = usersData.items[parsedFruitID].fruitPrice;


				usersData.items.splice(parsedFruitID, 1);

				usersData.totalItemCount -= cacheFruitCount

				usersData.totalPrice -= cachePrice;


				this.broadCast();


			}

			/* Setter Methods */

			function setNewUserData(id, newFruitCount) {
				//newFruitCount in input needed to be parsed to a number since it was a string

				console.log(id, newFruitCount);

				var parsedFruitCount = parseInt(newFruitCount);
				var cacheFruitCount = usersData.items[id].fruitCount;
				var cachePrice = usersData.items[id].fruitPrice;

				//checks for validation of checkout order


				if (newFruitCount === 0) {

					usersData.items.splice(id, 1);
					usersData.totalItemCount -= (cacheFruitCount);
					usersData.totalPrice -= cachePrice;

					this.broadCast();
					return;
				}


				//checks if the fruitname is equal to AND if the fruitcount is equal to the curent fruit count
				if (usersData.items[id] & usersData.items[id].fruitCount == parsedFruitCount) {



					this.broadCast();

				}


				//checks if the fruitname is equal to AND if the current fruitcount is greater than the original fruitcount 
				if (usersData.items[id] && parsedFruitCount > usersData.items[id].fruitCount) {

					//subtracts the current price so that the new price wont double

					usersData.totalPrice -= (usersData.items[id].fruitPrice);
					usersData.totalItemCount -= usersData.items[id].fruitCount;

					//updates user data or each individual fruit object and total pricing

					usersData.items[id].fruitCount = parsedFruitCount;
					usersData.items[id].fruitPrice = (usersData.items[id].originalPrice * parsedFruitCount);


					//update total price and total amount of usersData user data
					usersData.totalItemCount += usersData.items[id].fruitCount;
					usersData.totalPrice += (usersData.items[id].originalPrice * parsedFruitCount);

					this.broadCast();
				}


				//checks if the fruitname is equal to AND if the current fruitcount is less than the original fruitcount 
				if (usersData.items[id] && parsedFruitCount < usersData.items[id].fruitCount) {

					//subtracts the current price so that the new price wont double

					usersData.totalPrice -= (usersData.items[id].fruitPrice);
					usersData.totalItemCount -= usersData.items[id].fruitCount;

					//updates user data or each individual fruit object and total pricing

					usersData.items[id].fruitCount = parsedFruitCount;
					usersData.items[id].fruitPrice = (usersData.items[id].originalPrice * parsedFruitCount);


					//update total price and total amount of usersData user data
					usersData.totalItemCount += (usersData.items[id].fruitCount);
					usersData.totalPrice += (usersData.items[id].originalPrice * parsedFruitCount);

					this.broadCast();
				}

			}


			function setUserInformation(name, email, city) {

				usersData.name = name;
				usersData.email = email;
				usersData.city = city;
				usersData.validatedForm = true;
			}

			function enableEditing(id) {

				usersData.items[id].editing = true;
				
			}

			function enableEditing() {

				for (var i = 0; i < usersData.items.length; i++) {
					usersData.items.splice(i, 1);

				}

				usersData.totalItemCount = 0;
				usersData.totalPrice = 0;
				usersData.name = '';
				usersData.email = '';
				usersData.city = '';
				this.broadCast();

			}


			/* Getter Methods */

			function getTotalPrice() {

				return usersData.totalPrice;

			}

			function getItemCount() {

				return usersData.totalItemCount;

			}

			function getAllUsersData() {

				//return a user object with all current data

				return usersData;

			}

			function getListItems() {

				return usersData.items;
			}

			function getName() {

				return usersData.name;
			}

			function getEmail() {

				return usersData.email;
			}

			function getCity() {

				return usersData.city;
			}

			function getFormValidation() {

				return usersData.validatedForm;
			}

			function broadCast() {

				$rootScope.$broadcast('handleBroadCast');
			}



			return service;

		}
	]);
}());