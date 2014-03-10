expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel, ExpensesModel, CategoriesModel) {
	"use strict"
	$scope.categories = (function(){
		var categoryList = CategoriesModel.listCategories();
		var amountPerCategory = ExpensesModel.getExpensesByCategory();
		for (var key in categoryList){
			categoryList[key].amount = amountPerCategory[key].value;
		}
		return categoryList;
	})();

	var getCategoryData = function(){	
		return ExpensesModel.getExpensesByCategory();
	};

	var getTimeData = function(){
		return ExpensesModel.getExpensesByTime();
	};

	//Get context with jQuery - using jQuery's .get() method.
	$scope.ctxCategory = $("#byCategoryChart").get(0).getContext("2d");
	$scope.myNewChart1 = new Chart($scope.ctxCategory);
	$scope.chartCategory = new Chart($scope.ctxCategory).Doughnut(getCategoryData(),{});
	$scope.ctxTime = $("#byTimeChart").get(0).getContext("2d");
	$scope.myNewChart2 = new Chart($scope.ctxTime);
	$scope.chartTime = new Chart($scope.ctxTime).Line(getTimeData(),{});

});