// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
expenseTrackerAppModule.controller("expenseTracker.MainController", function($scope, $rootScope, $location, DinnerModel) {

	$scope.typeOnDisplay = "starter";
	$scope.dishesOnDisplay = DinnerModel.getAllDishes( $scope.typeOnDisplay );
	
	$scope.dishTypes = DinnerModel.getDishTypes();
	$scope.dishesSelected = DinnerModel.getFullMenu();
	
	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	$scope.totalPrice = DinnerModel.getTotalMenuPrice();

	//
	// Event Listener	
	//
	var selectDishEventListener = $rootScope.$on('dishModelChanged', 
		function(event) { 
			$scope.updateDisplay();
		}
	);

	//

	$scope.changeDishesOnDisplayTo = function (type) {
		$scope.typeOnDisplay = type;

		$scope.dishesOnDisplay = DinnerModel.getAllDishes(type);

		$('#controls li').removeClass('active');
		$('#controls li.' + type).addClass('active');
	};

	$scope.setNumberOfGuests = function ( n ) {
		var number = parseInt( n );

		if ( number > 0 ) {
			DinnerModel.setNumberOfGuests( number );

			$scope.updateDisplay();
		}
	};

	$scope.removeDish = function (newDish) {
		DinnerModel.removeDishFromMenu( newDish.id );

		$scope.updateDisplay();
	};

	$scope.updateDisplay = function () {
		$scope.dishesSelected = DinnerModel.getFullMenu();
		$scope.totalPrice = DinnerModel.getTotalMenuPrice();
		$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
	};

	$scope.addDish = function (dishId) {
		DinnerModel.addDishToMenu( dishId );

		$rootScope.$emit('dishModelChanged');
	};

	$scope.getDishPrice = function (dish) {
		return DinnerModel.getPriceOfDish( dish.id );
	};

	$scope.showDishDetail = function (dish) {
		DinnerModel.setDetailViewId( dish.id );
		$location.path('/dish-detail');
	};

	$scope.showOverview = function () {
		$rootScope.$emit('renderOverviewController');
	};


});