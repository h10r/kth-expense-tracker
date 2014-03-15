expenseTrackerAppModule.controller('expenseTracker.ExpensesController', function ($scope, $location, $routeParams, $rootScope, UserModel, ExpensesModel, CategoriesModel, CurrenciesModel) {
  'use strict';

  var now,
    currentCategoryId,
    v,
    infiniteValue = 0,
    up = 0,
    down = 0,
    $ival = $('div.ival');

	$scope.categories = CategoriesModel.listCategories();
  $scope.categoryColors = CategoriesModel.getAvailableColors();

  if ($location.$$path === '/expenses/add') {
    $scope.currentExpense = ExpensesModel.initNewExpense();

    now = new Date();
    $scope.currentExpense.date = now.toDateString();
    $scope.currentExpense.time = now.toLocaleTimeString();
  } else if ($location.$$path.indexOf('/expenses/remove/') != -1) {
		ExpensesModel.removeExpenseFromCollection($routeParams.id);
		$location.path('/feed');
	} else {
		$scope.currentExpense = ExpensesModel.getCurrentExpense();
	}

	$scope.amount = ExpensesModel.getAmount();

  currentCategoryId = ExpensesModel.getCategory();

  $scope.selectedCategory = CategoriesModel.getCategoryById(currentCategoryId);

  $scope.userCurrency = CurrenciesModel.getCurrencyById(UserModel.getCurrency());


	$scope.chooseCategory = function (categoryId) {
		ExpensesModel.setCategory(categoryId);

		$location.path('/expenses/add/details');
	};
	
	$scope.saveExpense = function () {
		//console.log( "saveExpense" );
		
		ExpensesModel.addExpenseToCollection();

		$location.path('/feed');
	};


	$scope.updateValue = function (value) {

		ExpensesModel.setAmount(value);
		
		$scope.amount = ExpensesModel.getAmount();

		$scope.$digest();
	};


  // Example of infinite knob, iPod click wheel
  var incr = function () {
      infiniteValue++;
      $ival.html(infiniteValue);
      $scope.updateValue(infiniteValue);
    },
    decr = function () {
      if (ExpensesModel.getAmount() !== 0) {
        infiniteValue--;
        $ival.html(infiniteValue);
        $scope.updateValue(infiniteValue);
      }
    };

  // init jQuery knob
  $('.infinite').knob({
    min: 0,
    max: 30,
    width: 230,
    height: 230,
    stopper: false,
    cursor: 30,
    inline: false,
    fgColor: '#0fb2be',
    bgColor: '#e6e6e7',
    displayInput: false,
    change: function () {
      if (v > this.cv) {
        if (up) {
          decr();
          up = 0;
        } else {
          up = 1;
          down = 0;
        }
      } else {
        if (v < this.cv) {
          if (down) {
            incr();
            down = 0;
          } else {
            down = 1;
            up = 0;
          }
        }
      }
      v = this.cv;
    }
  });

});