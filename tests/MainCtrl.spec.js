(function() {
	'use strict';
	describe('Main Ctrl Test', function() {
		var MainCtrl,
			$scope,
			$rootScope,
			mockService,
			$controller;


		beforeEach(function() {
			module('myApp');

			mockService = {
				getItemCount: function() {},
				getTotalPrice: function() {}
			}
			inject(function(_$rootScope_, _$controller_) {
				$scope = _$rootScope_.$new();
				$controller = _$controller_;
				$rootScope = _$rootScope_;
			});
			MainCtrl = $controller('mainCtrl', {
				$scope: $scope,
				userData: mockService
			})
			spyOn($rootScope, '$broadcast');



		});

		it('should have controller', function() {
			expect(MainCtrl).toBeDefined();
		});


		it('should have variabled defined', function() {
			expect($scope.items).toBe(0);
			expect($scope.total).toBe(0);
		});

		it("should broadcast something", function() {
			$rootScope.$broadcast('handleBroadCast');
			expect($rootScope.$broadcast).toHaveBeenCalledWith('handleBroadCast');

		});


	});





	
}());
