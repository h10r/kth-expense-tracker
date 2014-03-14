expenseTrackerAppModule.controller('expenseTracker.GoalsController', function($scope, $location, GoalsModel, UserModel, CurrenciesModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;

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

	$scope.getTodayForDateField = function() {
		var now = new Date();
	    var month = (now.getMonth() + 1);
	    var day = now.getDate();
	    if (month < 10) {
	        month = "0" + month;
	    }
	    if (day < 10) {
	        day = "0" + day;
	    }
	    var today = now.getFullYear() + '-' + month + '-' + day;
    	return today;
	}
});