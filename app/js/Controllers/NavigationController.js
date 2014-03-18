expenseTrackerAppModule.controller('expenseTracker.NavigationController', function ($scope, $location) {
  'use strict';

  $scope.equalsCurrentSection = function (sectionName) {
    var currentSection = $location.$$path.split('/');
    currentSection = currentSection[1];

    //console.log(currentSection);

    if (currentSection === sectionName) {
      return 'active';
    } else {
      return '';
    }
  };
});