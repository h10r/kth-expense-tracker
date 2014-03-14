expenseTrackerAppModule.controller('expenseTracker.SettingsController', function($scope, $location, CategoriesModel, UserModel, GoalsModel, CurrenciesModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.currencies = CurrenciesModel.getCurrenciesList();
	$scope.userCurrency = CurrenciesModel.getCurrencyById( $scope.currentUser.currency ).sign;

	$scope.setCurrency = function (currencyId) {
		$scope.userCurrency = currencyId;
		
		UserModel.setCurrency(currencyId);
	};

	$scope.checkCurrency = function (currencyId) {
		if (UserModel.getCurrency() == currencyId) {
			return 'active';
		} else {
			return '';
		}
	};

	$scope.redirectToSettingsPage = function () {
		$location.path('/settings');
	};

	$scope.saveBudget = function () {
		$scope.redirectToSettingsPage();
	};	
});