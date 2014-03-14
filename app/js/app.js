'use strict';

// Declare app level module which depends on filters, and services
var expenseTrackerAppModule = angular.module('expenseTracker', ['ngRoute']);

expenseTrackerAppModule.config(['$routeProvider', function ($routeProvider) {

  // main navigation
  $routeProvider.when('/expenses/add', {templateUrl: 'partials/expense/expense-add.html', controller: 'expenseTracker.ExpensesController'});
  $routeProvider.when('/expenses/add/category', {templateUrl: 'partials/expense/expense-add-category.html', controller: 'expenseTracker.ExpensesController'});
  $routeProvider.when('/expenses/add/details', {templateUrl: 'partials/expense/expense-add-details.html', controller: 'expenseTracker.ExpensesController'});
  $routeProvider.when('/expenses/remove/:id', {templateUrl: 'partials/expense/expense-add.html', controller: 'expenseTracker.ExpensesController'});

  $routeProvider.when('/feeds', {templateUrl: 'partials/feeds/feeds.html', controller: 'expenseTracker.FeedsController'});
  $routeProvider.when('/feeds/detail/:id', {templateUrl: 'partials/feeds/feeds-detail.html', controller: 'expenseTracker.FeedsController'});

  $routeProvider.when('/overview', {templateUrl: 'partials/overview/overview.html', controller: 'expenseTracker.OverviewController'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings/settings.html', controller: 'expenseTracker.SettingsController'});
  
  $routeProvider.when('/overview/weekly', {templateUrl: 'partials/overview/overview-weekly.html', controller: 'expenseTracker.OverviewController'});

  $routeProvider.when('/categories', {templateUrl: 'partials/categories/categories.html', controller: 'expenseTracker.CategoriesController'});
  $routeProvider.when('/categories/add', {templateUrl: 'partials/categories/categories-add.html', controller: 'expenseTracker.CategoriesController'});
  
  $routeProvider.when('/goals', {templateUrl: 'partials/goals/goals.html', controller: 'expenseTracker.GoalsController'});
  $routeProvider.when('/goals/add', {templateUrl: 'partials/goals/goals-add.html', controller: 'expenseTracker.GoalsController'});

  $routeProvider.when('/settings/budget', {templateUrl: 'partials/settings/budget.html', controller: 'expenseTracker.SettingsController'});
  $routeProvider.when('/settings/change-currency', {templateUrl: 'partials/settings/change-currency.html', controller: 'expenseTracker.SettingsController'});
  $routeProvider.when('/settings/maximum-per-spending', {templateUrl: 'partials/settings/maximum-per-spending.html', controller: 'expenseTracker.SettingsController'});
  
  // root path
  $routeProvider.otherwise({redirectTo: '/expenses/add'});
}]);
