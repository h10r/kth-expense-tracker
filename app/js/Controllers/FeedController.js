expenseTrackerAppModule.controller('expenseTracker.FeedController', function($scope, $location, $routeParams, UserModel, ExpensesModel, CategoriesModel) {

	if( $location.$$path.indexOf("/feeds/detail/") != -1) {
		$scope.expense = ExpensesModel.getExpenseById( $routeParams.id );
		$scope.category = CategoriesModel.getCategoryById( $scope.expense.category_id );
	} else {
		$scope.expenses = ExpensesModel.getExpenses();
	}

	$scope.openDetailView = function (expenseId) {
		$location.path('/feeds/detail/' + expenseId);
	};
});