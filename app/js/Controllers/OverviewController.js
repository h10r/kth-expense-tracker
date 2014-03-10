expenseTrackerAppModule.controller('expenseTracker.OverviewController', function($scope, $rootScope, UserModel) {
	//data which is pulled from the model.
	var weekData = [
	    {
	      value: 30,
	      color:"#F7464A"
	    },
	    {
	      value : 50,
	      color : "#E2EAE9"
	    },
	    {
	      value : 100,
	      color : "#D4CCC5"
	    },
	    {
	      value : 40,
	      color : "#949FB1"
	    },
	    {
	      value : 120,
	      color : "#4D5360"
	    }
	  ]
	var monthData = {
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
	  
  //Get context with jQuery - using jQuery's .get() method.
  $scope.ctxWeek = $("#byCategoryChart").get(0).getContext("2d");
  //This will get the first returned node in the jQuery collection.
  $scope.myNewChart1 = new Chart($scope.ctxWeek);
  $scope.chartWeek = new Chart($scope.ctxWeek).Doughnut(weekData,{});

  $scope.ctxMonth = $("#byTimeChart").get(0).getContext("2d");
  //This will get the first returned node in the jQuery collection.
  $scope.myNewChart2 = new Chart($scope.ctxMonth);
  $scope.chartMonth = new Chart($scope.ctxMonth).Line(monthData,{});
});