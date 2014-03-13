//GoalModel Object constructor
expenseTrackerAppModule.service('GoalsModel', function () {
	'use strict';

	var goals = [],
		goal = {
			id : '',
			target : '',
			timestamp : '',
			location : '',
			description : ''
		};

	return {

		addGoal : function (goal) {
			return goal;
		},

		removeGoal : function (goalId) {
			// return detailViewId;
		},

		getGoalById : function (goalId) {
			// return detailViewId;
		}
	};
});
