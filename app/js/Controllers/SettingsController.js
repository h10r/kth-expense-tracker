expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $rootScope, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();

	$scope.addBudget = function() {

		console.log("saveBudget");
		//UserModel.addBudget();
		console.log("addBudget.value");

		//$location.path('');
	}

});