expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel, CurrenciesModel, ExpensesModel, NavigationService) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;
	$scope.goBack = NavigationService.goBack;

	$scope.deleteMode = false;
	
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
	
	$scope.toggleDeleteMode = function() {
		$scope.deleteMode = !$scope.deleteMode;
	}

	$scope.saveGoal = function() {
		GoalsModel.saveCurrentGoalToCollection();
		$scope.goBack();
	}

	$scope.removeGoal = function( goalId ) {
		GoalsModel.removeGoalFromCollection( goalId );
	}
});