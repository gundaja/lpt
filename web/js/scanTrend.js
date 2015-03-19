angular.module("scan", [{
    name: "webService",
    files: ["js/service.js", ]
	},
	{
    name: "ui.select",
    files: ["bower_components/angular-ui-select/dist/select.css", "bower_components/angular-ui-select/dist/select.js"]
	}]
	)
    .controller("ScanTrendCtrl", function ($scope, service) {
		console.log(service);
        var store = this;
	
		store.scanTrendTypes = service.getScanTrendTypes();		    


		store.regionList =  service.regionList();
		store.marketList =  service.marketList();
		store.timeZone = service.timeZone();
		store.mmePools = service.getAllMmePools();
		$scope.model = {};
		$scope.model.userInfo = service.userInfo();

		$scope.refresh = function() {
			console.log($scope.model);
		}
		
		// todo: create a directive
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			$("#mme-pool-form [bs-duallistbox]").bootstrapDualListbox({
				preserveSelectionOnMove: 'moved',				
				moveOnSelect: false
			});
		});
	})
