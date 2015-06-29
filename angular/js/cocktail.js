
angular.module('cocktailApp', [])
    .controller('CocktailController', ['$scope', function ($scope) {
    $scope.ingredients = ["gin", "tonic"];
    $scope.cocktails = [
        {name: "Whiskey Sour", ingredients: ["whiskey", "lemon", "simple syrup"]},
        {name: "Sidecar", ingredients: ["brandy", "lemon", "triple sec"] },
        {name: "Bourbon Sidecar", ingredients: ["whiskey", "lemon", "triple sec"] },
        {name: "Old Fashioned", ingredients: ["whiskey", "simple syrup", "bitters"] },
        {name: "Manhattan", ingredients: ["whiskey", "vermouth", "bitters"] },  
        {name: "Gin Martini", ingredients: ["gin", "vermouth"] },
        {name: "Vodka Martini", ingredients: ["vodka", "vermouth"] },
        {name: "Kamikaze", ingredients: ["vodka", "triple sec", "lime"] },
        {name: "Margarita", ingredients: ["tequila", "triple sec", "lime"] },
        {name: "Gin and Tonic", ingredients: ["gin", "tonic"] },
        {name: "Vodka and Tonic", ingredients: ["vodka", "tonic"] },
        {name: "Metropolitan", ingredients: ["brandy", "vermouth", "bitters", "simple syrup"] },
        {name: "Mojito", ingredients: ["rum", "lime", "mint", "sugar", "soda"] },
        {name: "Mint Julep", ingredients: ["whiskey", "mint", "sugar"]},
        {name: "Tom Collins", ingredients: ["vodka", "sugar", "soda", "lemon"]}
    ];


    $scope.addIngredient = function () {
        var ingredient = $scope.ingredientText.toLowerCase();
        //check for empties and doubles
        if (ingredient.length != 0 && $scope.ingredients.indexOf(ingredient) == -1) {
            $scope.ingredients.push(ingredient);
        }
        $scope.ingredientText = '';
    };

    $scope.removeIngredient = function(ingredient) {
        //note - does not handle doubles! 
        $scope.ingredients.splice($scope.ingredients.indexOf(ingredient), 1);
    };

    $scope.filterCocktails = function (cocktail) {
        for (var i=0; i<cocktail.ingredients.length; i++) {
            if ($scope.ingredients.indexOf(cocktail.ingredients[i]) == -1) return false;
        }
        return true;
    };

    $scope.filterMoreCocktails = function (cocktail) {
        var matchs = 0;
        for (var i=0; i<cocktail.ingredients.length; i++) {
            if ($scope.ingredients.indexOf(cocktail.ingredients[i]) != -1) matchs++;
        }
        return matchs === cocktail.ingredients.length-1;
    };

}]);