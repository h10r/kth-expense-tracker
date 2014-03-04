expenseTrackerAppModule.controller('expenseTracker.ExpenseController', function($scope, $rootScope, DinnerModel) {

	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	
	$scope.currentDish = DinnerModel.getDish( DinnerModel.getDetailViewId() );
	$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( DinnerModel.getDetailViewId() );

	$scope.confirmDish = function() {
		DinnerModel.addDishToMenu( DinnerModel.getDetailViewId() );

		$rootScope.$emit('dishModelChanged');
		
		$("#DishControllerView").modal("hide");
	};

});