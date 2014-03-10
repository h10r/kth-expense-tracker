expenseTrackerAppModule.controller('expenseTracker.ExpenseAddController', function($scope, $rootScope, UserModel, ExpensesModel) {

	$scope.amount = 300;

	$(".knob").knob({
	    change : function (value) {
	    	$scope.updateValue(value);
	    },
	    release : function (value) {
	    },
	    cancel : function () {
	    }
	});

	//

	$scope.decreaseAmount = function (value) {
		$scope.amount = $scope.amount-1;
	};

	$scope.increaseAmount = function (value) {
		$scope.amount = $scope.amount+1;
	};

	$scope.updateValue = function (value) {
		var xi = value / 100;
		var res = 1000 * -( Math.sqrt( 1 - xi*xi ) - 1);

		$scope.amount = Math.floor( res );

		$scope.$digest();
	};
	$scope.cancel = function () {

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