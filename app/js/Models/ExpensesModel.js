//ExpenseModel Object constructor
expenseTrackerAppModule.service('ExpensesModel', function () {

	var expenses = [],
		expense = {
			id : '',
			amount : '',
			timestamp : '',
			location : '',
			description : ''
		};

	return {
		addExpense : function (expense) {
			// return detailViewId;
		},

		removeExpense : function (expenseId) {
			// return detailViewId;
		},

		getExpenseById : function (expenseId) {
			// return detailViewId;
		}
	};
});