//GoalModel Object constructor
expenseTrackerAppModule.service("GoalsModel", function() {

	goals = [];

	var goal = {
		id : "",
		target : "",
		timestamp : "",
		location : "",
		description : ""
	}

	return {

		addGoal : function(goal) {
			// return detailViewId;
		},

		removeGoal : function(goal) {
			// return detailViewId;
		},

		getGoalById : function(goalId) {
			// return detailViewId;
		}
	}
});
