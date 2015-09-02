(function() {
	'use strict';
	describe('User Data Service Test', function() {
		var userData,
			$scope,
			usersMockData,
			$rootScope,
			allUsersData,
			tax,
			shippingRate;

		beforeEach(function() {
			module('myApp');
			
			allUsersData = [],
			tax          = 3,
			shippingRate = 7
			usersMockData    = {
								name: '',
								email: '',
								city: '',
								validatedForm: false,
								freeShipping: false,
								totalItemCount: 0,
								totalPrice: 0,
								calculatedTotalPrice: 0,
								items: [{
									fruit: "orange"
								}]
							};


			inject(function(_$rootScope_, _userData_) {
				$scope = _$rootScope_.$new();
				$rootScope = _$rootScope_;
				userData = _userData_;
			});

		});


		it('should have a user data service defined', function() {
			expect(userData).toBeDefined();
		});
		it('should have declared variables', function() {
			expect(usersMockData).toBeDefined();
			expect(allUsersData).toBeDefined();
			expect(tax).toEqual(3);
			expect(shippingRate).toEqual(7);
		});
		it('should have all functions ', function() {
			expect(userData.findFruitDuplicate).toBeDefined();
			expect(userData.addFruitDuplicate).toBeDefined();
			expect(userData.setCheckout).toBeDefined();
			expect(userData.deleteUsersFruit).toBeDefined();
			expect(userData.setNewUserData).toBeDefined();
			expect(userData.setUserInformation).toBeDefined();
			expect(userData.enableEditing).toBeDefined();
			expect(userData.getTotalPrice).toBeDefined();
			expect(userData.getTotalCalculatedPrice).toBeDefined();
			expect(userData.getItemCount).toBeDefined();
			expect(userData.getAllUsersData).toBeDefined();
			expect(userData.getListItems).toBeDefined();
			expect(userData.getName).toBeDefined();
			expect(userData.getEmail).toBeDefined();
			expect(userData.getCity).toBeDefined();
			expect(userData.getShipping).toBeDefined();
			expect(userData.getFormValidation).toBeDefined();
			expect(userData.clearData).toBeDefined();

		});


		it('should return total price when getTotalPrice is called', function() {
			expect(userData.getTotalPrice()).toEqual(0);
		});
		it('should return total item count when getItemCount is called', function() {
			expect(userData.getItemCount()).toEqual(0);
		});

		it('should return email when getEmail is called', function() {
			expect(userData.getEmail()).toEqual(usersMockData.email);
		});
		it('should return form validation when getFormValidation is called', function() {
			expect(userData.getFormValidation()).toEqual(usersMockData.validatedForm);
			
		});
		it('should return city name when getCity is called', function() {
			expect(userData.getCity()).toEqual(usersMockData.city);
			
		});

		it('should return name when getName is called', function() {
			expect(userData.getCity()).toEqual(usersMockData.name);
			
		});
		it('should return list of items when getListItems is called', function() {
			expect(userData.getListItems()).toEqual([]);
			
		});
		it('should return calculated price when getTotalCalculatedPrice is called', function() {
			expect(userData.getTotalCalculatedPrice()).toEqual(tax + shippingRate);			
		});

	});

}());
