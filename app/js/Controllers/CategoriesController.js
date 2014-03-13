expenseTrackerAppModule.controller('expenseTracker.CategoriesController', function($scope, $location, CategoriesModel, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	if( $location.$$path == "/categories/add" ) {
		$scope.currentCategory = CategoriesModel.initNewCategory();
		$scope.availableColors = CategoriesModel.getAvailableColors();
	} else {
		$scope.categories = CategoriesModel.listCategories();
	}
	
	$scope.redirectToSettingsPage = function() {
		$location.path('/settings');
	}

	$scope.chooseColorForCategory = function(colorId) {
		CategoriesModel.setCategoryColorById( colorId );
	}

	$scope.saveCategory = function() {
		CategoriesModel.saveCurrentCategoryToCollection();

		$scope.redirectToSettingsPage();
	}

});