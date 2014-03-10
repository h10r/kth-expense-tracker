//ExpenseModel Object constructor
expenseTrackerAppModule.service('ExpensesModel', function () {

	var expenses = [],
		currentExpense,
		expense = {
			id : -1,
			amount : 0.0,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : null
		};

	expenses.push(
		{
			id : 1,
			amount : 123.00,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 2,
			amount : 45.00,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 3,
			amount : 301,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 4,
			amount : 21,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 1
		},
		{
			id : 5,
			amount : 79,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 3
		}
		)

	return {
		initNewExpense : function() {
			currentExpense = jQuery.extend(true, {}, expense);
			return currentExpense;
		},

		getCurrentExpense : function() {
			return currentExpense;
		},

		getAmount : function() {
			return currentExpense.amount;
		},

		setAmount : function(newAmount) {
			currentExpense.amount = newAmount;
		},
		
		getCategory : function() {
			return currentExpense.category_id;
		},

		setCategory : function(newCategory) {
			currentExpense.category_id = newCategory;
		},

		// higher level functions

		addExpenseToCollection : function(expense) {
			// return detailViewId;
			expenses.push( currentExpense );
		},

		removeExpenseFromCollection : function (expenseId) {
			// return detailViewId;
		},

		getExpenseById : function (expenseId) {
			for(key in expenses){
				if(expenses[key].id == expenseId) {
					return expenses[key];
				}
			}
		},

		sortByCategory : function () {
			
		}
	};
});
