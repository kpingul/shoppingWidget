(function() {
	'use strict';
	describe('FruitData Service Test', function() {
		var fruitData,
			$scope,
			$rootScope;

		beforeEach(function() {
			module('myApp');

	
			inject(function(_$rootScope_, _fruitData_) {
				$scope = _$rootScope_.$new();
				fruitData = _fruitData_;
			});

		});

		it('should have fruit data service', function() {
			expect(fruitData).toBeDefined();
		});

		it('should have an array of fruits', function() {
			expect(fruitData.fruit.length).toBe(17);
		});

		it('should have get all fruits function', function() {
			expect(fruitData.getAllFruits).toBeDefined();
		});
		it('should have get single fruits function', function() {
			expect(fruitData.getSingleFruit).toBeDefined();
		});

		it('should return all fruits when getAllFruits is called', function() {
			expect(fruitData.getAllFruits()).toEqual(fruitData.fruit)

		});	
		it('should return a single fruit when getSingleFruit is called', function() {
			expect(fruitData.getSingleFruit(1)).toEqual(fruitData.fruit[1])
			expect(fruitData.getSingleFruit(2)).toEqual(fruitData.fruit[2])

		});

	});

}());
