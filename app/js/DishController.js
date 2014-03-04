// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
expenseTrackerAppModule.controller('expenseTracker.DishController', function($scope, $rootScope, DinnerModel) {

	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	
	$scope.currentDish = DinnerModel.getDish( DinnerModel.getDetailViewId() );
	$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( DinnerModel.getDetailViewId() );

	$scope.confirmDish = function() {
		DinnerModel.addDishToMenu( DinnerModel.getDetailViewId() );

		$rootScope.$emit('dishModelChanged');
		
		$("#DishControllerView").modal("hide");
	};

});