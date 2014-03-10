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
			color : '#1a9b53',
			icon : 'fa-shopping-cart'
		},
		{
			id : 1,
			title : 'eating out',
			color : '#9b1a44',
			icon : 'fa-cutlery'
		},
		{
			id : 2,
			title : 'coffee',
			color : '#875d2f',
			icon : 'fa-coffee'
		},
		{
			id : 3,
			title : 'beer',
			color : '#fbb600',
			icon : 'fa-beer'
		},
		{
			id : 4,
			title : 'mobile phone',
			color : '#cb3687',
			icon : 'fa-phone'
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
			for (var key in categories) {
				if (categories[key].id === categoryId) {
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
