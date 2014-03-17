//Back-button service
expenseTrackerAppModule.service('NavigationService', function () {
  'use strict';

  return {
    goBack : function () {
      window.history.back();
    }
  };
  
});