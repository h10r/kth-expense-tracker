expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $rootScope, UserModel) {

	$scope.addBudget = UserModel.initNewBudget();

	$scope.saveBudget = function  () {

		console.log("saveBudget");
		UserModel.addBudget();
		console.log("addBudget.value");

		//$location.path('');
	}

});