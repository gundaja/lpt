angular.module("home", [{
    name: "cart",
    files: ["js/cart.js"]
}])
    .controller("HomeCtrl", function ($scope, list) {
		console.log($scope);
        var store = this;
        store.message = list.items;
})
