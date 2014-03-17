expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel, CurrenciesModel, ExpensesModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;

	if( $location.$$path == "/goals/add" ) {
		$scope.currentGoal = GoalsModel.initNewGoal();
	} else {
		if ( UserModel.isBudgetSet() ) {
			$scope.hasBudget = true;
			$scope.goals = GoalsModel.getAllGoals();

			$scope.averageSpendingPerDay = ExpensesModel.getAverageSpendingPerDay();
			$scope.optimalSpendingPerDayByBudget = ExpensesModel.getOptimalSpendingPerDayByBudget();
		} else {
			$scope.hasBudget = false;
		}
	}
	
	$scope.saveGoal = function() {
		GoalsModel.saveCurrentGoalToCollection();
		$location.path('/goals');
	}

	$scope.removeGoal = function( goalId ) {
		GoalsModel.removeGoalFromCollection( goalId );
	}
});