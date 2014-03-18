expenseTrackerAppModule.controller('expenseTracker.SettingsController', function ($scope, $location, CategoriesModel, UserModel, GoalsModel, CurrenciesModel, NavigationService) {
	'use strict';

	$scope.currentUser = UserModel.getCurrentUser();
	$scope.currencies = CurrenciesModel.getCurrenciesList();
	$scope.userCurrency = CurrenciesModel.getCurrencyById($scope.currentUser.currency);
	$scope.goBack = NavigationService.goBack;

	$scope.setCurrency = function (currencyId) {
		$scope.userCurrency = currencyId;
		
		UserModel.setCurrency(currencyId);
	};

	$scope.checkCurrency = function (currencyId) {
		if (UserModel.getCurrency() === currencyId) {
			return 'active';
		} else {
			return '';
		}
	};

	$scope.redirectToSettingsPage = function () {
		$location.path('/settings');
	};
});