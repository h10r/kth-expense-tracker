expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel, ExpensesModel, CategoriesModel) {
	"use strict"
	//TODO: get currency type from user model for display.

	$scope.catChartVisible = true;
	$scope.timeChartVisible= false;

	$scope.categories = (function(){
		//console.log("test log");
		var categoryList = CategoriesModel.listCategories();
		var amountPerCategory = ExpensesModel.getExpensesByCategory();
		for (var key in categoryList){
			categoryList[key].amount = amountPerCategory[key].value;
		}
		//console.log(categoryList);
		return categoryList;
	})();

	$scope.getWeekChart = function () {
		var canvas = document.getElementById('byTimeChart');
      	var context = canvas.getContext('2d');
      	context.canvas.width = 300;
		context.canvas.height = 200;
		context.clearRect(0,0,canvas.width,canvas.height)
		$scope.chartTime = new Chart(context).Line(getTimeData(),{});
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

});