angular.module("scanTrend", [{
    name: "cart",
    files: ["js/cart.js"]
}])
    .controller("ScanTrend", function ($scope, list) {
		console.log($scope);
        var store = this;
        store.message = list.items;
})
