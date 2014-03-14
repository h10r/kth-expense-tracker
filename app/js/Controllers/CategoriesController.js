expenseTrackerAppModule.controller('expenseTracker.CategoriesController', function($scope, $location, CategoriesModel, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	$scope.deleteMode = false;

	if( $location.$$path == "/categories/add" ) {
		$scope.currentCategory = CategoriesModel.initNewCategory();
		$scope.availableColors = CategoriesModel.getAvailableColors();
	} else {
		$scope.categories = CategoriesModel.listCategories();
	}
	
	$scope.chooseColorForCategory = function(colorId) {
		CategoriesModel.setCategoryColorById( colorId );
	}
	
	$scope.toggleDeleteMode = function() {
		$scope.deleteMode = !$scope.deleteMode;
		console.log( $scope.deleteMode );
	}

	$scope.saveCategory = function() {
		CategoriesModel.saveCurrentCategoryToCollection();

		$location.path('/categories');
	}

	$scope.removeCategory = function(categoryId) {
		CategoriesModel.removeCategoryFromCollection(categoryId);

		//$scope.categories = CategoriesModel.listCategories();
	}
});