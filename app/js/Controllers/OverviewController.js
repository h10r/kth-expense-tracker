expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel, ExpensesModel) {


  getCategoryData = function(){
  	
  	return ExpensesModel.getExpensesByCategory()
  };

  getTimeData = function(){
  	var data = {
	  labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],
	    datasets : [
	      {
	            fillColor : "rgba(151,187,205,0.5)",
	      		strokeColor : "rgba(151,187,205,1)",
	      		pointColor : "rgba(151,187,205,1)",
	      		pointStrokeColor : "#fff",
	        	data : [65,59,90,81,56,28,48,40,19,90,81,56,55,40,105]
	      }
	    ]
	}
	return data
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