expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $location, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	$scope.saveBudget = function() {
		$location.path('/settings');
	}
});