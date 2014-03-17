//UserModel Object constructor
expenseTrackerAppModule.service('KnobModel', function (ExpensesModel) {
	'use strict';
	
	var infiniteValue = 0,
    v,
    up = 0,
    down = 0,
    $ival = $('div.ival'),
    now = new Date();

    var incr = function() {
		infiniteValue++;
		$ival.html(infiniteValue);
		
		ExpensesModel.setAmount(infiniteValue);
	};

	var decr = function() {
		if (ExpensesModel.getAmount() !== 0) {
			infiniteValue--;
			$ival.html(infiniteValue);
		
			ExpensesModel.setAmount(infiniteValue);
		}
	};

	var changeEventHandler = function() {
		if (v > this.cv) {
			if (up) {
			  decr();
			  up = 0;
			} else {
			  up = 1;
			  down = 0;
			}
		} else {
			if (v < this.cv) {
			  if (down) {
			    incr();
			    down = 0;
			  } else {
			    down = 1;
			    up = 0;
			  }
			}
		}
		v = this.cv;
	};

	return {
		initialize : function() {
			$('.infinite').knob({
			    min: 0,
			    max: 30,
			    width: 230,
			    height: 230,
			    stopper: false,
			    cursor: 30,
			    inline: false,
			    fgColor: '#0fb2be',
			    bgColor: '#e6e6e7',
			    displayInput: false,
			    change: changeEventHandler
			});
		}
	};
});