angular.module("home", [{
    name: "webService",
    files: ["js/service.js"]
	}
])
    .controller("HomeCtrl", function ($scope, service, $injector, inform) {
        var store = this;
		
		store.news = service.getListOfNews();
		
		store.reportLevels = service.getReportLevels();		
		
})
