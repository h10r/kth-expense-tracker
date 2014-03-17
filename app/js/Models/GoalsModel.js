//GoalModel Object constructor
expenseTrackerAppModule.service('GoalsModel', function (ExpensesModel) {
	'use strict';

	// @TODO: use the ID from the backend / database
	var nextIDCounter = 0;

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

		calculateDaysUntilUserSavedEnough : function( target, spendingPerDay ) {
			console.log( target );
			console.log( spendingPerDay );
		},

		getAllGoals : function() {
			var spendingStats = ExpensesModel.calculateAverageSpendingPerDay();

			for (var key in goals) {
				goals[key].daysUntilSavedEnough = this.calculateDaysUntilUserSavedEnough(goals[key].target, spendingStats.spendingDelta);
			}

			return goals;
		}
	};
});
