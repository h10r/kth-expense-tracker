expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $location, CategoriesModel, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();


	if( $location.$$path == "/category/add" ) {
		$scope.currentCategory = CategoriesModel.initNewCategory();
		$scope.available_colors = CategoriesModel.getAvailableColors();
	}
	
	$scope.redirectToSettingsPage = function() {
		$location.path('/settings');
	}

	$scope.saveBudget = function() {
		$scope.redirectToSettingsPage();
	}

	$scope.chooseColorForCategory = function(colorId) {
		CategoriesModel.setCategoryColorById( colorId );
	}

	$scope.addCategory = function() {
		CategoriesModel.saveCurrentCategoryToCollection();

		$scope.redirectToSettingsPage();
	}

});