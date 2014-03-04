//DinnerModel Object constructor
expenseTrackerAppModule.service("DinnerModel", function() {

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishTypes = [{
		'value': 'starter', 
		'caption': 'Starter' },{
		'value': 'main-dish',
		'caption': 'Main Dish' },{
		'value': 'dessert',
		'caption': 'Dessert' }];

	var dishes = [{
		'id': 1,
		'name': 'French toast',
		'type': 'starter',
		'image': 'toast.jpg',
		'description': 'French toast, also known as eggy bread or gypsy toast, is a dish of bread soaked in beaten eggs and then fried.',
		'preparation': 'In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.',
		'ingredients': [{
			'name': 'eggs',
			'quantity': 0.5,
			'unit': '',
			'price': 10
			},{
			'name': 'milk',
			'quantity': 30,
			'unit': 'ml',
			'price': 6
			},{
			'name': 'brown sugar',
			'quantity': 7,
			'unit': 'g',
			'price': 1
			},{
			'name': 'ground nutmeg',
			'quantity': 0.5,
			'unit': 'g',
			'price': 12
			},{
			'name': 'white bread',
			'quantity': 2,
			'unit': 'slices',
			'price': 2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description': 'Sourdough is a bread product made by a long fermentation of dough using naturally occurring lactobacilli and yeasts.',
		'preparation': 'The preparation of sourdough begins with a pre-ferment, (the "starter" or "levain", also known as the "chief", "chef", or "head"), made of flour and water.[2] The purpose of the starter is to produce a vigorous leaven and to develop the flavour of the bread. In practice there are several kinds. The ratio of water to flour in the starter (the "hydration") varies and a starter may be a fluid batter or a stiff dough.',
		'ingredients': [{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description': 'Baked brie - it has got to be one of the easiest, most simple dishes to serve as an appetizer and one of the biggest crowd pleasers. How can you contend with warm soft cheesy goodness?',
		'preparation': 'Preheat the oven to 350 degrees F. Place the brie on a sheet pan covered with parchment paper and drizzle with the honey. Bake for 5 to 7 minutes, or until it starts to ooze but not melt. Serve with crackers.',
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main-dish',
		'image':'meatballs.jpg',
		'description':"Swedish köttbullar (meatballs) made with ground beef, pork and veal, including breadcrumbs soaked in milk, finely chopped (fried) onions, some broth and often including cream. ",
		'preparation':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'Lasagna',
		'type':'main-dish',
		'image':'lasagna.jpg',
		'description': 'Lasagne are a wide, flat pasta shape, and possibly one of the oldest types of pasta. The word also refers to a dish made with several layers of lasagne sheets alternated with sauces and various other ingredients.',
		'preparation': 'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.',
		'ingredients':[{ 
			'name':'Sweet Italian sausage',
			'quantity': 500,
			'unit':'g',
			'price': 8
			},{
			'name':'lean ground beef',
			'quantity': 750,
			'unit': 'g',
			'price': 45
			},{
			'name':'minced onion',
			'quantity': 0.5,
			'unit':'cup',
			'price': 4
			},{
			'name':'crushed garlic',
			'quantity': 2,
			'unit':'cloves',
			'price': 4
			},{
			'name':'crushed tomatoes',
			'quantity': 1,
			'unit': 'can',
			'price': 15
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main-dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'preparation': 'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.',		
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolate Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description': 'Chocolate ice cream is ice cream with natural or artificial chocolate flavoring. Chocolate is the second most common flavor of ice cream in the United States, after vanilla.',
		'preparation': 'Place the cocoa powder along with 1 cup of the half-and-half into a medium saucepan over medium heat and whisk to combine. Add the remaining half-and-half and the heavy cream. Bring the mixture just to a simmer, stirring occasionally, and remove from the heat.',
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'preparation': 'Place the cocoa powder along with 1 cup of the half-and-half into a medium saucepan over medium heat and whisk to combine. Add the remaining half-and-half and the heavy cream. Bring the mixture just to a simmer, stirring occasionally, and remove from the heat.',
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'preparation': 'Place the cocoa powder along with 1 cup of the half-and-half into a medium saucepan over medium heat and whisk to combine. Add the remaining half-and-half and the heavy cream. Bring the mixture just to a simmer, stirring occasionally, and remove from the heat.',
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	]

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
