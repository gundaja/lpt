angular.module("store", [])
    .service("cart", function () {
        this.buy = function () {
            console.log("Thanks for buying something!");
        }
})
