expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel, CurrenciesModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;

	console.log( $scope.userCurrency );

	$scope.deleteMode = false;
	
	if( $location.$$path == "/goals/add" ) {
		$scope.currentGoal = GoalsModel.initNewGoal();
	} else {
		$scope.goals = GoalsModel.getAllGoals();
	}
	
	$scope.toggleDeleteMode = function() {
		$scope.deleteMode = !$scope.deleteMode;
	}

	$scope.saveGoal = function() {
		GoalsModel.saveCurrentGoalToCollection();
		$location.path('/goals');
	}

	$scope.removeGoal = function( goalId ) {
		GoalsModel.removeGoalFromCollection( goalId );
	}
});