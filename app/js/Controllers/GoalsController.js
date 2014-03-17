expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel, CurrenciesModel, ExpensesModel, NavigationService) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;
	$scope.goBack = NavigationService.goBack;

	if( $location.$$path == "/goals/add" ) {
		$scope.currentGoal = GoalsModel.initNewGoal();
	} else {
		if ( UserModel.isBudgetSet() ) {
			$scope.hasBudget = true;
			$scope.goals = GoalsModel.getAllGoals();

			$scope.averageSpendingPerDay = ExpensesModel.getAverageSpendingPerDay();
			$scope.optimalSpendingPerDayByBudget = ExpensesModel.getOptimalSpendingPerDayByBudget();
			$scope.savingsPerDay = ExpensesModel.getSavingsPerDay();
		} else {
			$scope.hasBudget = false;
		}
	}
	
	$scope.saveGoal = function() {
		GoalsModel.saveCurrentGoalToCollection();
		$scope.goBack();
	}

	$scope.getGoalColorBasedOnDays = function (days) {
		var className = "goal-border-";

		if ( days <= 10 ) {
			return className + "soon";
		} else if ( days > 10 && days <= 42 ) {
			return className + "near";
		} else if ( days > 42 ) {
			return className + "far";
		}
	}

	$scope.removeGoal = function () {
		var clickedAnchor = document.getElementsByClassName('triggered-active-modal'),
			anchorHref,
			currentModal,
			goalId;

		clickedAnchor = clickedAnchor[0];
		goalId = clickedAnchor.dataset.goalid;

		GoalsModel.removeGoalFromCollection(goalId);

		anchorHref = clickedAnchor.getAttribute('href');

		currentModal = document.querySelector(anchorHref);
		currentModal.classList.toggle('active');
	};
});