expenseTrackerAppModule.controller('expenseTracker.FeedController', function($scope, $location, $routeParams, UserModel, ExpensesModel) {

	if( $location.$$path.indexOf("/feeds/detail/") != -1) {
		$scope.expense = ExpensesModel.getExpenseById( $routeParams.id );
	} else {
		$scope.expenses = ExpensesModel.getExpenses();
	}

	$scope.openDetailView = function (expenseId) {
		$location.path('/feeds/detail/' + expenseId);
	};
});