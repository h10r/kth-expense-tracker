'use strict';

// Declare app level module which depends on filters, and services
var expenseTrackerAppModule = angular.module('expenseTracker', ['ngRoute']);

expenseTrackerAppModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/expenses/add', {templateUrl: 'partials/expense-add.html', controller: 'expenseTracker.ExpenseController'});
  $routeProvider.when('/feeds', {templateUrl: 'partials/feeds.html', controller: 'expenseTracker.FeedController'});
  $routeProvider.when('/overview', {templateUrl: 'partials/overview.html', controller: 'expenseTracker.OverviewController'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'expenseTracker.SettingsController'});
  
  $routeProvider.when('/overview/weekly', {templateUrl: 'partials/overview-weekly.html', controller: 'expenseTracker.OverviewController'});
  
  $routeProvider.otherwise({redirectTo: '/expenses/add'});
}]);

// add layout stuff here 
$(document).on("ready", function() {
  $("#controls li:first-child").addClass("active");

  $("#controls li").on("click", function () {
    $("#controls li").removeClass("active");
    $(this).addClass("active");
  });
});