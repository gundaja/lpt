angular.module("common", [{
    name: "webService",
    files: ["js/service.js"]
}])
    .controller("CommonCtrl", function ($scope, $ocLazyLoad, service) {
		console.log(service);
        var store = this;
	
		store.newsList = service.regionList();	
		
})
