(function() {
	'use strict';
	describe('Single Fruit Controller Test', function() {
		
		var fruitController,
			$scope,
			$rootScope,
			mockSingleFruitData,
			mockUserDataService,
			$controller,
			delaySpeed,
			userData,
			processForm;


		beforeEach(function() {
			module('myApp');
			delaySpeed = 200;
			processForm = "processForm";

			mockSingleFruitData = {
				id: 1
			};
			mockUserDataService = {
				setCheckout: function() {}
			};

			inject(function(_$rootScope_, _$controller_, _userData_) {
				$scope = _$rootScope_.$new();
				$controller = _$controller_;
				userData = _userData_;
			});
			fruitController = $controller('singleFruitCtrl as fruit', {
				$scope: $scope,
				userData: mockUserDataService,
				SingleFruit: mockSingleFruitData
			});


			$scope.$digest();

		});


		it('should have a controller', function() {
			expect(fruitController).toBeDefined();

		});
		it('should have a user data service', function() {
			expect(userData).toBeDefined();
		});
		it('delcared variables', function() {
			expect(delaySpeed).toBe(200)
			expect(processForm).toBe("processForm")
			expect($scope.fruit.singleFruit).toEqual(mockSingleFruitData);
			expect($scope.fruit.singleFruit.fruitCount).toEqual("QTY");
			expect($scope.fruit.id).toEqual(mockSingleFruitData.id);
			expect($scope.fruit.editing).toBeFalsy();
		});

		it('should have an addToCart function', function() {
			expect($scope.fruit.addToCart).toBeDefined();
		});
		it('addToCart should have been called', function() {
			spyOn($scope.fruit, 'addToCart');
			spyOn(userData, 'setCheckout');
			$scope.fruit.addToCart();
			userData.setCheckout();
			expect($scope.fruit.addToCart).toHaveBeenCalled();
			expect(userData.setCheckout).toHaveBeenCalled();
		});


	});

	
}());
