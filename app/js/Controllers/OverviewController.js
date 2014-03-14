expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel, ExpensesModel, CategoriesModel, CurrenciesModel) {
	'use strict';
	$scope.budgetChartVisible = true;
	$scope.catChartVisible = false;
	$scope.timeChartVisible= false;

	$scope.categoriesList = (function(){
		var categoryList = CategoriesModel.listCategories();
		var amountPerCategory = ExpensesModel.getExpensesByCategory();
		for (var key in categoryList){
			categoryList[key].amount = amountPerCategory[key].value;
		}
		return categoryList;
	})();
	$scope.categoryColors = CategoriesModel.getAvailableColors();

	$scope.getBudgetChart = function () {
		var canvas = document.getElementById('byBudgetChart');
      	var context = canvas.getContext('2d');
      	context.canvas.width = 300;
		context.canvas.height = 200;
		context.clearRect(0,0,canvas.width,canvas.height)
		$scope.chartBudget = new Chart(context).Line(getBudgetData(),{pointDot : false, bezierCurve : false});
		$scope.budgetChartVisible = true;
		$scope.catChartVisible = false;
		$scope.timeChartVisible= false;
	};

	$scope.getWeekChart = function () {
		var canvas = document.getElementById('byTimeChart');
      	var context = canvas.getContext('2d');
      	context.canvas.width = 300;
		context.canvas.height = 200;
		context.clearRect(0,0,canvas.width,canvas.height)
		$scope.chartTime = new Chart(context).Line(getTimeData(),{});
		$scope.budgetChartVisible = false;
		$scope.catChartVisible = false;
		$scope.timeChartVisible= true;
	};

	$scope.getCatChart = function () {
		var canvas = document.getElementById('byCategoryChart');
      	var context = canvas.getContext('2d');
      	context.canvas.width = 300;
		context.canvas.height = 200;
		context.clearRect(0,0,canvas.width,canvas.height)
		$scope.chartCategory = new Chart(context).Doughnut(getCategoryData());
		$scope.budgetChartVisible = false;
		$scope.catChartVisible = true;
		$scope.timeChartVisible= false;
	};

	$scope.weeklyTotals = ExpensesModel.getWeeklyTotals();

	var getCategoryData = function(){	
		return ExpensesModel.getExpensesByCategory();
	};

	var getTimeData = function(){
		return ExpensesModel.getExpensesByTime();
	};

	var getBudgetData = function(){
		return ExpensesModel.getExpensesByBudget();
	};

	//Get context with jQuery - using jQuery's .get() method.
	var ctxCategory = $("#byCategoryChart").get(0).getContext("2d");
	ctxCategory.width = 300;
	ctxCategory.height= 200;
	var myNewChart1 = new Chart(ctxCategory);
	$scope.chartCategory = new Chart(ctxCategory).Doughnut(getCategoryData(),{});

	var ctxTime = $("#byTimeChart").get(0).getContext("2d");
	ctxTime.width = 300;
	ctxTime.height= 200;
	var myNewChart2 = new Chart(ctxTime);
	$scope.chartTime = new Chart(ctxTime).Line(getTimeData(),{});

	var ctxBudget = $("#byBudgetChart").get(0).getContext("2d");
	ctxBudget.width = 300;
	ctxBudget.height= 200;
	var myNewChart3 = new Chart(ctxBudget);
	$scope.chartBudget = new Chart(ctxBudget).Line(getBudgetData(),{pointDot : false, bezierCurve : false});

	// currency user has selected in the settings
	$scope.userCurrency = CurrenciesModel.getCurrencyById(UserModel.getCurrency());

});