expenseTrackerAppModule.controller('expenseTracker.CategoriesController', function($scope, $location, CategoriesModel, UserModel) {

	$scope.currentUser = UserModel.getCurrentUser();
	
	$scope.categoryColors = CategoriesModel.getAvailableColors();
	$scope.selectedColor = -1;

	if( $location.$$path == "/categories/add" ) {
		$scope.currentCategory = CategoriesModel.initNewCategory();
		$scope.availableColors = CategoriesModel.getAvailableColors();
	} else {
		$scope.categories = CategoriesModel.listCategories();
	}
	
	$scope.chooseColorForCategory = function (colorId) {
		// reset color id on toggle
		if ( $scope.selectedColor === colorId ) {
			colorId = -1;
		}

		$scope.selectedColor = colorId;
		CategoriesModel.setCategoryColorById( colorId );
	};

	$scope.saveCategory = function () {
		CategoriesModel.saveCurrentCategoryToCollection();

		$location.path('/categories');
	};

	$scope.removeCategory = function () {
		var clickedAnchor = document.getElementsByClassName('triggered-active-modal'),
			anchorHref,
			currentModal,
			categoryId;

		clickedAnchor = clickedAnchor[0];
		categoryId = clickedAnchor.dataset.categoryid;

		CategoriesModel.removeCategoryFromCollection(categoryId);

		anchorHref = clickedAnchor.getAttribute('href');

		currentModal = document.querySelector(anchorHref);
		currentModal.classList.toggle('active');

	};

});