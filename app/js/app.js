'use strict';

// Declare app level module which depends on filters, and services
var expenseTrackerAppModule = angular.module('expenseTracker', ['ngRoute']);

expenseTrackerAppModule.config(['$routeProvider', function ($routeProvider) {

  // main navigation
  $routeProvider.when('/expenses/add', {templateUrl: 'partials/expense/expense-add.html', controller: 'expenseTracker.ExpenseAddController'});
  $routeProvider.when('/expenses/add/category', {templateUrl: 'partials/expense/expense-add-category.html', controller: 'expenseTracker.ExpenseAddController'});
  $routeProvider.when('/feeds', {templateUrl: 'partials/feeds/feeds.html', controller: 'expenseTracker.FeedController'});
  $routeProvider.when('/overview', {templateUrl: 'partials/overview/overview.html', controller: 'expenseTracker.OverviewController'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings/settings.html', controller: 'expenseTracker.SettingsController'});
  
  $routeProvider.when('/overview/weekly', {templateUrl: 'partials/overview/overview-weekly.html', controller: 'expenseTracker.OverviewController'});

  $routeProvider.when('/category/add', {templateUrl: 'partials/category/category-add.html', controller: 'expenseTracker.SettingsController'});
  
  $routeProvider.when('/goal/add', {templateUrl: 'partials/goal/goal-add.html', controller: 'expenseTracker.SettingsController'});

  $routeProvider.when('/settings/budget', {templateUrl: 'partials/settings/budget.html', controller: 'expenseTracker.SettingsController'});
  $routeProvider.when('/settings/change-currency', {templateUrl: 'partials/settings/change-currency.html', controller: 'expenseTracker.SettingsController'});
  
  // root path
  $routeProvider.otherwise({redirectTo: '/expenses/add'});
}]);

// add layout stuff here 
$(document).on('ready', function () {
  $('#controls li:first-child').addClass('active');

  $('#controls li').on('click', function () {
    $('#controls li').removeClass('active');
    $(this).addClass('active');
  });
});