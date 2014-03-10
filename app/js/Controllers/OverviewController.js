expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel, ExpensesModel) {


  getCategoryData = function(){	
  	return ExpensesModel.getExpensesByCategory()
  };

  getTimeData = function(){
	return ExpensesModel.getExpensesByTime()
  };

  //Get context with jQuery - using jQuery's .get() method.
  $scope.ctxCategory = $("#byCategoryChart").get(0).getContext("2d");
  //This will get the first returned node in the jQuery collection.
  $scope.myNewChart1 = new Chart($scope.ctxCategory);
  $scope.chartCategory = new Chart($scope.ctxCategory).Doughnut(getCategoryData(),{});

  $scope.ctxTime = $("#byTimeChart").get(0).getContext("2d");
  //This will get the first returned node in the jQuery collection.
  $scope.myNewChart2 = new Chart($scope.ctxTime);
  $scope.chartTime = new Chart($scope.ctxTime).Line(getTimeData(),{});

});