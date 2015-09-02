(function() {
	'use strict';
	describe('Fruit List Test', function() {
		var fruitListController,
			$scope,
			$rootScope,
			mockService,
			$controller;


		beforeEach(function() {
			module('myApp');

			mockService = []
			inject(function(_$rootScope_, _$controller_) {
				$scope = _$rootScope_.$new();
				$controller = _$controller_;
			});
			fruitListController = $controller('fruitListCtrl as fruitList', {
				$scope: $scope,
				FruitList: mockService
			});

		});


		it('should have a controller', function() {
			expect(fruitListController).toBeDefined();

		});

		it('should contain fruit lists', function() {
			expect($scope.fruitList.fruits).toBeDefined();
		});
	});
			
}());		