expenseTrackerAppModule.controller('expenseTracker.ExpensesController', function ($scope, $location, $routeParams, $rootScope, UserModel, ExpensesModel, CategoriesModel, CurrenciesModel, KnobModel) {
  'use strict';

  var currentCategoryId;

  $scope.categories = CategoriesModel.listCategories();
  $scope.categoryColors = CategoriesModel.getAvailableColors();

  if ($location.$$path === '/expenses/add') {
    $scope.currentExpense = ExpensesModel.initNewExpense();

    var now = new Date();
    $scope.currentExpense.date = now.toDateString();
    $scope.currentExpense.time = now.toLocaleTimeString();

    $scope.amount = ExpensesModel.getAmount();
    
    KnobModel.initialize();
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
    ExpensesModel.addExpenseToCollection();

    $location.path('/feed');
  };
});