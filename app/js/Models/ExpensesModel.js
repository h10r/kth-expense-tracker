//ExpenseModel Object constructor
expenseTrackerAppModule.service('ExpensesModel', function () {

	var expenses = [],
		expense = {
			id : -1,
			amount : 0.0,
			timestamp : null,
			location : null,
			description : null,
			category_id : null
		};

	expenses.push(
		{
			id : 1,
			amount : 123.00,
			timestamp : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 2,
			amount : 45.00,
			timestamp : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 3,
			amount : 301,
			timestamp : null,
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 4,
			amount : 21,
			timestamp : null,
			location : null,
			description : null,
			category_id : 1
		},
		{
			id : 5,
			amount : 79,
			timestamp : null,
			location : null,
			description : null,
			category_id : 3
		}
		)

	return {
		addExpense : function(expense) {
			// return detailViewId;
		},

		removeExpense : function (expenseId) {
			// return detailViewId;
		},

		getExpenseById : function (expenseId) {
			for(key in expenses){
				if(expenses[key].id == expenseId) {
					return expenses[key];
				}
			}
		},

		getExpensesByCategory : function () {
			var data = [
			    {
			      value: 30,
			      color:"#F7464A"
			    },
			    {
			      value : 50,
			      color : "#E2EAE9"
			    },
			    {
			      value : 100,
			      color : "#D4CCC5"
			    },
			    {
			      value : 40,
			      color : "#949FB1"
			    },
			    {
			      value : 120,
			      color : "#4D5360"
			    }
			]
			return data
		}
	};
});
