//CategoryModel Object constructor
expenseTrackerAppModule.service("CategoryModel", function() {

	// some old stuff to make it easier to copy the structure

	var menu = [];
	var numberOfGuests = 3; //set default number of guests
	//menu['starter'] = 1; //set a starter to the menu, to use for testing

	var detailViewId = 1;

	return {
		getDetailViewId : function() {
			return detailViewId;
		},
		
		setDetailViewId : function(dishId) {
			detailViewId = dishId;
		},
		
		setNumberOfGuests : function(num) {
			if(num>0) {
				numberOfGuests = num;
			}
		},

		getNumberOfGuests : function() {
			return parseInt(numberOfGuests);
		},

		getDishTypes : function() {
			return dishTypes;
		},

		//Returns the dish that is on the menu for selected type 
		getSelectedDish : function(type) {
			return menu[type];
		},

		//Returns all the dishes on the menu.
		getFullMenu : function() {
			var menuDishes = [];
			for(key in menu) {
				menuDishes.push(this.getDish(menu[key]));
			}
			return menuDishes;
		},

		//Returns all ingredients for all the dishes on the menu.
		getAllIngredients : function() {
			var ingredients = [];
			for(key in menu) {
				var dish = this.getDish(menu[key]);
				ingredients = ingredients.concat(dish.ingredients);
			}
			return ingredients;
		},

		//Returns the total price of the menu (all the ingredients multiplied by number of guests).
		getTotalMenuPrice : function() {
			var ingredients = this.getAllIngredients();
			var sum = 0.;
			for(key in ingredients) {
				sum += parseFloat(ingredients[key].price) * this.getNumberOfGuests();
			}
			return sum;
		},

		//Adds the passed dish to the menu. If the dish of that type already exists on the menu
		//it is removed from the menu and the new one added.
		addDishToMenu : function(id) {
			menu[this.getDish(id).type] = id; 
		},

		//Removes dish from menu
		removeDishFromMenu : function(id) {
			var type = this.getDish(id).type;
			if(menu[type] == id) {
				delete menu[type];
			}
		},

		//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
		//you can use the filter argument to filter out the dish by name or ingredient (use for search)
		//if you don't pass any filter all the dishes will be returned
		getAllDishes : function (type,filter) {
		  return $(dishes).filter(function(index,dish) {
			var found = true;
			if(filter){
				found = false;
				$.each(dish.ingredients,function(index,ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}
		  	return dish.type == type && found;
		  });	
		},

		//function that returns a dish of specific ID
		getDish : function (id) {
		  for(key in dishes){
				if(dishes[key].id == id) {
					return dishes[key];
				}
			}
		},

		getPriceOfDish : function (id) {
			var sum = 0.0;

			var dish = this.getDish( id );

			for(i in dish.ingredients) {
				sum += parseFloat( dish.ingredients[i].price );
			}

			return sum;
		}
	}
});
