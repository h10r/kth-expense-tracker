expenseTrackerAppModule.controller('expenseTracker.FeedController', function ($scope, $location, $routeParams, UserModel, ExpensesModel, CategoriesModel, CurrenciesModel) {
	'use strict';

	$scope.categoryColors = CategoriesModel.getAvailableColors();
	$scope.userCurrency = CurrenciesModel.getCurrencyById(UserModel.getCurrency());
	$scope.userBudget = UserModel.getBudget();
	$scope.monthlyTotal = ExpensesModel.getMonthlyTotal();
	$scope.spentBudgetPercentage = (function () {
		if($scope.userBudget > 0) {
			return Math.round(($scope.monthlyTotal / $scope.userBudget) * 100);
		} else {
			return false;
		}
	}());

	$scope.isOverBudget = (function () {
		if ($scope.spentBudgetPercentage > 100) {
			return true;
		} else {
			return false;
		}
	}());


	// if on feeds/detail page
	if ($location.$$path.indexOf('/feed/detail/') !== -1) {
		$scope.expense = ExpensesModel.getExpenseById($routeParams.id);
		$scope.category = CategoriesModel.getCategoryById($scope.expense.category_id);

	// if on feeds main page	
	} else {
		$scope.expenses = ExpensesModel.getExpenses();
		$scope.expenses_categories = [];

		for (var expense in $scope.expenses) {
			$scope.expenses_categories.push({
				expense : $scope.expenses[expense],
				category : CategoriesModel.getCategoryById($scope.expenses[expense].category_id)
			});
		}
	}

	$scope.openDetailView = function (expenseId) {
		$location.path('/feed/detail/' + expenseId);
	};
});