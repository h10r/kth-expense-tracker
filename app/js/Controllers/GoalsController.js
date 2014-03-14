expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	$scope.deleteMode = false;
	
	$scope.categoryColors = CategoriesModel.getAvailableColors();
	$scope.selectedColor = -1;

	if( $location.$$path == "/goals/add" ) {
		$scope.currentCategory = CategoriesModel.initNewCategory();
		$scope.availableColors = CategoriesModel.getAvailableColors();
	} else {
		$scope.categories = CategoriesModel.listCategories();
	}
	
	$scope.chooseColorForCategory = function(colorId) {
		// reset color id on toggle
		if ( $scope.selectedColor === colorId ) {
			colorId = -1;
		}

		$scope.selectedColor = colorId;
		CategoriesModel.setCategoryColorById( colorId );
	}
	
	$scope.toggleDeleteMode = function() {
		$scope.deleteMode = !$scope.deleteMode;
	}

	$scope.saveCategory = function() {
		GoalsModel.saveCurrentGoalToCollection();

		$location.path('/goals');
	}

	$scope.removeCategory = function(categoryId) {
		CategoriesModel.removeCategoryFromCollection(categoryId);

		//$scope.categories = CategoriesModel.listCategories();
	}
});