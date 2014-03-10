expenseTrackerAppModule.controller('expenseTracker.ExpenseAddController', function($scope, $location, $rootScope, UserModel, ExpensesModel, CategoriesModel) {

	$scope.categories = CategoriesModel.listCategories();

	if( $location.$$path === "/expenses/add" ) {
		$scope.currentExpense = ExpensesModel.initNewExpense();
	} else {
		$scope.currentExpense = ExpensesModel.getCurrentExpense();
	}

	console.log( $scope.currentExpense );

	$scope.amount = ExpensesModel.getAmount();

	$(".knob").knob({
	    change : function (value) {
	    	$scope.updateValue(value);
	    },
	    release : function (value) {
	    }
	});

	//

	$scope.chooseCategory = function (categoryId) {
		ExpensesModel.setCategory( categoryId );

		$location.path('/expenses/add/details');
	};
	
	$scope.saveExpense = function () {
		console.log( "saveExpense" );
		
		ExpensesModel.addExpenseToCollection();

		$location.path('/feeds');
	};

	$scope.decreaseAmount = function() {
		ExpensesModel.setAmount( ExpensesModel.getAmount() - 1 );
		
		$scope.amount = ExpensesModel.getAmount();
	};

	$scope.increaseAmount = function() {
		ExpensesModel.setAmount( ExpensesModel.getAmount() + 1 );
		
		$scope.amount = ExpensesModel.getAmount();
	};

	$scope.updateValue = function (value) {
		var xi = value / 100;
		var res = 1000 * -( Math.sqrt( 1 - xi*xi ) - 1);

		ExpensesModel.setAmount( Math.floor( res ) );
		
		$scope.amount = ExpensesModel.getAmount();

		$scope.$digest();
	};

	$scope.draw = function () {
		if(this.$.data('skin') == 'tron') {
            this.cursorExt = 0.3;

            var a = this.arc(this.cv)  // Arc
                , pa                   // Previous arc
                , r = 1;

            this.g.lineWidth = this.lineWidth;

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
        }
	};

});