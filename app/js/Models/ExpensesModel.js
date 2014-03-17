//ExpenseModel Object constructor
expenseTrackerAppModule.service('ExpensesModel', function (CategoriesModel) {
	'use strict';

	// @TODO: use the ID from the backend / database
	var nextIDCounter = 9,
		categoryColors = CategoriesModel.getAvailableColors(),
		expenses = [],
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

	// pre-defined expenses for testing
	expenses.push(
		{
			id : 0,
			amount : 123.00,
			time : null,
			date : new Date(2014, 2, 1),
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 1,
			amount : 45.00,
			time : null,
			date : new Date(2014, 2, 3),
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 2,
			amount : 301,
			time : null,
			date : new Date(2014, 2, 4),
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 3,
			amount : 21,
			time : null,
			date : new Date(2014, 2, 4),
			location : null,
			description : null,
			category_id : 1
		},
		{
			id : 4,
			amount : 79,
			time : null,
			date : new Date(2014, 2, 5),
			location : null,
			description : null,
			category_id : 3
		},
		{
			id : 5,
			amount : 103,
			time : null,
			date : new Date(2014, 2, 8),
			location : null,
			description : null,
			category_id : 0
		},
		{
			id : 6,
			amount : 73,
			time : null,
			date : new Date(2014, 2, 10),
			location : null,
			description : null,
			category_id : 2
		},
		{
			id : 7,
			amount : 137,
			time : null,
			date : new Date(2014, 2, 11),
			location : null,
			description : null,
			category_id : 4
		},
		{
			id : 8,
			amount : 89,
			time : null,
			date : new Date(2014, 2, 12),
			location : null,
			description : null,
			category_id : 1
		}
	);

	Date.prototype.monthDays= function () {
	    var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    	return d.getDate();
	}

	Date.prototype.getWeek = function() { 
	    var determinedate = new Date(); 
	    determinedate.setFullYear(this.getFullYear(), this.getMonth(), this.getDate()); 
	    var D = determinedate.getDay(); 
	    if(D == 0) D = 7; 
	    determinedate.setDate(determinedate.getDate() + (4 - D)); 
	    var YN = determinedate.getFullYear(); 
	    var ZBDoCY = Math.floor((determinedate.getTime() - new Date(YN, 0, 1, -6)) / 86400000); 
	    var WN = 1 + Math.floor(ZBDoCY / 7); 
	    return WN; 
	}

	function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
	};

	return {
		initNewExpense : function () {
			currentExpense = jQuery.extend(true, {}, expense);
			currentExpense.id = nextIDCounter;
			nextIDCounter = nextIDCounter + 1;
			return currentExpense;
		},

		getCurrentExpense : function () {
			return currentExpense;
		},

		getExpenses : function () {
			return expenses.reverse();
    	},

		getAmount : function () {
			return currentExpense.amount;
		},

		setAmount : function (newAmount) {
			currentExpense.amount = newAmount;
		},

		getCategory : function () {
			return currentExpense.category_id;
		},

		setCategory : function (newCategory) {
			currentExpense.category_id = newCategory;
		},

		// higher level functions

		addExpenseToCollection : function (expense) {
			// return detailViewId;
			expenses.push(currentExpense);
		},

		removeExpenseFromCollection : function (expenseId) {
			for (var key in expenses) {
				if (expenses[key].id == expenseId) {
					expenses.splice( expenses.indexOf( expenses[key] ), 1 );
				}
			}
		},

		getExpenseById : function (expenseId) {
			for (var key in expenses) {
				if (expenses[key].id == expenseId) {
					return expenses[key];
				}
			}
		},

		getExpensesChronologically : function () {

			var chronologicalExpenses = expenses;

			chronologicalExpenses.sort(function (a, b) {
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				//return new Date(b.date) - new Date(a.date);
				return b.date - a.date;
			});
			return chronologicalExpenses;
		},

		getExpensesByCategory : function () {
			var categories = CategoriesModel.listCategories(),
				dataArray = [];

			for (var category in categories) {
				var sum = 0;
				for (var id in expenses) {
					if (expenses[id].category_id == category){
						sum += expenses[id].amount;
					}
				}
				dataArray[category]={
					value : sum,
					color : categoryColors[ categories[category].color_id ].color_value
				};
			};
			return dataArray;
		},

		getExpensesByTime : function () {
			var data = {
			  labels : ["Mo","Tu","We","Th","Fr","Sa","Su"],
			    datasets : [
					{
			      		fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : this.getPreviousWeeksExpenses()
					},
					{
			            fillColor : "rgba(151,187,205,0.5)",
			      		strokeColor : "rgba(151,187,205,1)",
			      		pointColor : "rgba(151,187,205,1)",
			      		pointStrokeColor : "#fff",
			        	data : this.getThisWeeksExpenses()
			      	}
			    ]
			}
			return data;
		},

		getExpensesByBudget : function () {
			var test = $.map( range(1,30), function( n ) {
			  return n*4;
			});
			console.log(test)
			var data = {
			  labels : range(1,30),
			    datasets : [
					{
			      		//grey color
			      		fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : range(1,30)
					},
					{
			            //blue color
			            fillColor : "rgba(151,187,205,0.3)",
			      		strokeColor : "rgba(151,187,205,1)",
			      		pointColor : "rgba(151,187,205,1)",
			      		pointStrokeColor : "#fff",
			        	data : test
			      	}
			    ]
			}
			return data;
		},

		getThisWeeksExpenses : function () {
			var currentDate = new Date();
			var currentWeekNumber = currentDate.getWeek();
			var expenses = this.getExpenses();
			console.log(expenses);
			var weekData = [0,0,0,0,0,0,0];
			console.log("current week number: " + currentWeekNumber);
			for (var idx in expenses){

				if ( typeof expenses[idx].date == 'string' ){
					expenses[idx].date = new Date(expenses[idx].date);
					console.log(expenses[idx].date)
				}

				if (expenses[idx].date.getWeek() == currentWeekNumber){
					var dayIndex = expenses[idx].date.getDay()-1;
					weekData[dayIndex] += expenses[idx].amount;
				}
			}
			console.log("current week day totals: "+weekData);
			return weekData;
		},

		getPreviousWeeksExpenses : function () {
			var currentDate = new Date();
			var currentWeekNumber = currentDate.getWeek()-1;
			var expenses = this.getExpenses();
			console.log(expenses);
			var weekData = [0,0,0,0,0,0,0];

			for (var idx in expenses){

				if ( typeof expenses[idx].date == 'string' ){
					expenses[idx].date = new Date(expenses[idx].date);
				}

				if (expenses[idx].date.getWeek() == currentWeekNumber){
					var dayIndex = expenses[idx].date.getDay()-1;
					weekData[dayIndex] += expenses[idx].amount;
				}
			}
			console.log("previous week day totals: "+weekData);
			return weekData;

		},

		getWeeklyTotals : function () {
			var thisWeek = this.getThisWeeksExpenses();
			var lastWeek = this.getPreviousWeeksExpenses();
			var thisWeekTotal=0;
			var lastWeekTotal=0;
			for(var i in thisWeek) {
				thisWeekTotal += thisWeek[i]; 
				lastWeekTotal += lastWeek[i];
			}
			return [thisWeekTotal, lastWeekTotal];
		},

		getMonthlyTotal : function (month) {
			
			var monthlyTotal = 0,
				expenses = this.getExpenses(),
				currentDate,
				i;

			if (month === undefined) {
				currentDate = new Date();
				month = currentDate.getMonth();
			}

			for (i = 0; i < expenses.length; i++) {

				if (typeof expenses[i].date === 'string') {
					expenses[i].date = new Date(expenses[i].date);
				}
				if (expenses[i]['date'].getMonth() ===  month) {
					monthlyTotal += expenses[i]['amount'];
				}
			}
			return monthlyTotal;
		}
		
	};
});
