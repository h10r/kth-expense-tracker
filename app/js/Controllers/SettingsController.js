expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $location, UserModel, GoalsModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	$scope.saveBudget = function() {
	$location.path('/settings');
	};

	$scope.goal = GoalsModel.addGoal();
	$scope.saveGoal = function() {
	$location.path('/settings');
	};
});