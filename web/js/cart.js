angular.module("cart", [])
    .service("list", function () {
        this.items = ["shoe", "apple", "phone"];
    })