expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $location, CategoriesModel, UserModel, GoalsModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.goal = GoalsModel.addGoal();

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

	$scope.saveGoal = function() {
		$scope.redirectToSettingsPage();
	}
});