'use strict';

// Declare app level module which depends on filters, and services
var dinnerAppModule = angular.module('expenseTracker', ['ngRoute']);

dinnerAppModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/start-screen.html'});
  // these will be deleted
  $routeProvider.when('/plan-a-dinner', {templateUrl: 'partials/plan-a-dinner.html', controller: 'expenseTracker.MainController'});
  $routeProvider.when('/overview', {templateUrl: 'partials/overview.html', controller: 'expenseTracker.MainController'});
  $routeProvider.when('/preparation', {templateUrl: 'partials/preparation.html', controller: 'expenseTracker.MainController'});
  $routeProvider.when('/dish-detail', {templateUrl: 'partials/dish-detail.html', controller: 'expenseTracker.DishController'});
  
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

// add layout stuff here 
$(document).on("ready", function() {
  $("#controls li:first-child").addClass("active");

  $("#controls li").on("click", function () {
    $("#controls li").removeClass("active");
    $(this).addClass("active");
  });
});