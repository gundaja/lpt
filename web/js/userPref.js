angular.module("preference", [{
    name: "webService",
    files: ["js/service.js"]
}])
    .controller("UserPrefCtrl", function ($scope, $ocLazyLoad, service) {
        var store = this;
	
		store.regionList = service.regionList();		    
		store.marketList =  service.marketList();
		store.timeZone = service.timeZone();
		$scope.model = {};	
		$scope.model.userInfo = service.userInfo();		

		$scope.refresh = function() {
			console.log($scope.model);
		}
		
		$scope.$on('ocLazyLoad.moduleLoaded', function(e, params) {
			console.log('event module loaded', params);
		});

		$scope.$on('ocLazyLoad.componentLoaded', function(e, params) {
			console.log('event component loaded', params);
		});   

		$scope.$on('ocLazyLoad.fileLoaded', function(e, file) {
			console.log('event file loaded', file);
		});   
})
