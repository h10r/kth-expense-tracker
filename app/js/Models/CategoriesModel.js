//CategoryModel Object constructor
expenseTrackerAppModule.service('CategoriesModel', function () {
	'use strict';

	var categories = [],
		category = {
			id : -1,
			title : '',
			color : '',
			icon : ''
		};

	// default categories
	categories.push(
		{
			id : 0,
			title : 'groceries',
			color : '#4c9533',
			icon : ''
		},
		{
			id : 1,
			title : 'eating out',
			color : '#2781c0',
			icon : ''
		},
		{
			id : 2,
			title : 'coffee',
			color : '#c07327',
			icon : ''
		},
		{
			id : 3,
			title : 'beer',
			color : '#ecd84f',
			icon : ''
		}
	);

	return {
		addCategory : function (category) {
			// return detailViewId;
		},

		removeCategory : function (categoryId) {
			// return detailViewId;
		},

		getCategoryById : function (categoryId) {
			for(key in categories){
				if(categories[key].id == categoryId) {
					return categories[key];
				}
			}
		},
		
		listCategories : function () {
			// return detailViewId;
			return categories;
		}
	};
});
