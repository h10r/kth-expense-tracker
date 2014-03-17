//GoalModel Object constructor
expenseTrackerAppModule.service('GoalsModel', function (ExpensesModel) {
	'use strict';

	// @TODO: use the ID from the backend / database
	var nextIDCounter = 3;

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
		},{
			id : 2,
			target : 2500,
			description : "Paris"
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

			goals.sort(function(a,b){
			  return a['daysUntilGoalIsReached'] - b['daysUntilGoalIsReached'];
			});

			return goals;
		}
	};
});
