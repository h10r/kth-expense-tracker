//ExpenseModel Object constructor
expenseTrackerAppModule.service("ExpensesModel", function() {

	expenses = [];

	var expense = {
		id : "",
		amount : "",
		timestamp : "",
		location : "",
		description : ""
	};

	return {

		addExpense : function(expense) {
			// return detailViewId;
		},

		removeExpense : function(expense) {
			// return detailViewId;
		},

		getExpenseById : function(expenseId) {
			// return detailViewId;
		}
	}
});
