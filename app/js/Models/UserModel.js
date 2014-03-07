//UserModel Object constructor
expenseTrackerAppModule.service("UserModel", function() {

	var firstName = "";
	var lastName = "";
	var eMailAdress = "";

	var token = "";

	return {
		/* Getter and Setter */

		getFirstName : function() {
			return firstName;
		},
		
		setFirstName : function(value) {
			firstName = value;
		},
		
		getLastName : function() {
			return lastName;
		},
		
		setLastName : function(value) {
			lastName = value;
		},
		
		getEMailAddress : function() {
			return eMailAddress;
		},
		
		setEMailAddress : function(value) {
			eMailAddress = value;
		},

		getGoals : function() {
			// Goal Model
			
			//return goals;
		},
		
		setGoals : function(model) {
			// Goal Model
			
			//return goals;
		},
		
		getExpenses : function() {
			// Expenses Model
			
			//return expenses;
		},
		
		setExpenses : function(model) {
			// Expenses Model
			
			//return expenses;
		}
	}
});
