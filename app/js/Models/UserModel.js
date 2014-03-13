//UserModel Object constructor
expenseTrackerAppModule.service('UserModel', function () {
	'use strict';

	var 	firstName = '',
			lastName = '',
			eMailAddress = '',
			token = '',
		Budgets = [],
		addBudget,
		Budget = {
			id : -1,
			amount : 0.0,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : null,
			value : 0
		};

	Budgets.push(
		{
			id : 0,
			amount : 123.00,
			time : null,
			date : null,
			location : null,
			description : null,
			category_id : 2,
			value : 0
		}
		);
			

	return {
		/* Getter and Setter */

		getFirstName : function () {
			return firstName;
		},
		
		setFirstName : function (value) {
			firstName = value;
		},
		
		getLastName : function () {
			return lastName;
		},
		
		setLastName : function (value) {
			lastName = value;
		},
		
		getEMailAddress : function () {
			return eMailAddress;
		},
		
		setEMailAddress : function (value) {
			eMailAddress = value;
		},

		getGoals : function () {
			// Goal Model
			
			//return goals;
		},
		
		setGoals : function (model) {
			// Goal Model
			
			//return goals;
		},
		
		getExpenses : function () {
			// Expenses Model
			
			//return expenses;
		},
		
		setExpenses : function (model) {
			// Expenses Model
			
			//return expenses;
		},

		initNewBudget : function() {
			addBudget = jQuery.extend(true, {}, Budget);
			return addBudget;
		},



		addBudget : function(Budget) {
			// return detailViewId;
			Budgets.push( addBudget );
		}

	};
});



	



		