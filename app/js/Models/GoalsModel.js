//GoalModel Object constructor
expenseTrackerAppModule.service('GoalsModel', function () {
	'use strict';

	// @TODO: use the ID from the backend / database
	var nextIDCounter = 0;

	var goals = [],
		currentGoal,
		goal = {
			id : -1,
			target : '',
			timestamp : '',
			description : ''
		};

	return {

		initNewGoal : function() {
			currentGoal = jQuery.extend(true, {}, goal);
			currentGoal.id = nextIDCounter;
			nextIDCounter = nextIDCounter + 1;
			return currentGoal;
		},

		saveCurrentGoalToCollection : function() {
			goals.push( currentGoal );
		},

		removeGoalFromCollection : function (GoalId) {
			for (var key in goals) {
				if (goals[key].id == GoalId) {
					goals.splice( goals.indexOf( goals[key] ), 1 );
				}				
			}
		},

		getAllGoals : function() {
			return goals;
		}

	};
});
