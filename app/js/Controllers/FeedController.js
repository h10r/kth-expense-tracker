expenseTrackerAppModule.controller('expenseTracker.FeedController', function($scope, $location, $routeParams, UserModel, ExpensesModel, CategoriesModel) {

	$scope.categoryColors = CategoriesModel.getAvailableColors();

	// if on feeds/detail page
	if( $location.$$path.indexOf("/feeds/detail/") != -1) {
		$scope.expense = ExpensesModel.getExpenseById( $routeParams.id );
		$scope.category = CategoriesModel.getCategoryById( $scope.expense.category_id );
		
	} else { // if on feeds main page
		$scope.expenses = ExpensesModel.getExpenses();
		$scope.expenses_categories = [];

		for (expense in $scope.expenses) {
			$scope.expenses_categories.push({
				"expense" : $scope.expenses[expense], 
				"category" : CategoriesModel.getCategoryById( $scope.expenses[expense].category_id )
			});
		}
	}

	$scope.openDetailView = function (expenseId) {
		$location.path('/feeds/detail/' + expenseId);
	};
});