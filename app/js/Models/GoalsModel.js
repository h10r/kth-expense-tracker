//GoalModel Object constructor
expenseTrackerAppModule.service('GoalsModel', function (ExpensesModel) {
	'use strict';

	// @TODO: use the ID from the backend / database
	var nextIDCounter = 2;

	var goals = [],
		currentGoal,
		goal = {
			id : -1,
			target : '',
			description : ''
		};

		goals.push(
		{
			id : 0,
			target : 1000,
			description : "Jetski"
		},{
			id : 1,
			target : 5000,
			description : "iPad"
		}
		);

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

		calculateDaysUntilGoalIsReached : function( target, spendingPerDay ) {
			var daysUntilGoalIsReached = Math.ceil( target / spendingPerDay );
			return daysUntilGoalIsReached;
		},

		getAllGoals : function() {
			var spendingStats = ExpensesModel.calculateAverageSpendingPerDay();

			for (var key in goals) {
				goals[key].daysUntilGoalIsReached = this.calculateDaysUntilGoalIsReached(goals[key].target, spendingStats.spendingDelta);
			}

			return goals;
		}
	};
});
