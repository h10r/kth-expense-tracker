//ExpenseModel Object constructor
expenseTrackerAppModule.service('ExpensesModel', function (CategoriesModel) {

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
			id : 0,
			amount : 123.00,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 1,
			amount : 45.00,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 2,
			amount : 301,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 3,
			amount : 21,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 1
		},
		{
			id : 4,
			amount : 79,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 5,
			amount : 103,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 0
		}
		)
	sumArray = function(array){
		sum = 0;
		for (var i=0;i<array.length;i++)
		{ 
			sum += array[i];
		}
		return sum
	}
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

		getExpensesByCategory : function () {
			var colors = ["#F7464A","#E2EAE9","#D4CCC5","#949FB1","#4D5360"];
			var categories = CategoriesModel.listCategories();
			var dataArray = [];
			console.log(expenses);
			for(category in categories){
				var sum = 0;
				for(id in expenses){
					if(expenses[id].category_id == category){
						sum += expenses[id].amount;
					}
				}
				dataArray[category]={
					value : sum,
					color : colors[category]
				};
			}
			return dataArray
		},

		getExpensesByTime : function () {
			var data = {
			  labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],
			    datasets : [
			      {
			            fillColor : "rgba(151,187,205,0.5)",
			      		strokeColor : "rgba(151,187,205,1)",
			      		pointColor : "rgba(151,187,205,1)",
			      		pointStrokeColor : "#fff",
			        	data : [65,59,90,81,56,28,48,40,19,90,81,56,55,40,105]
			      }
			    ]
			}
			return data
		}
	};
});
