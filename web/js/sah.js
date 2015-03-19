angular.module("sah", [{
    name: "webService",
    files: ["js/service.js", ]
	},
	{
    name: "ui.select",
    files: ["bower_components/angular-ui-select/dist/select.css", "bower_components/angular-ui-select/dist/select.js"]
	}]
	)
    .controller("SahCtrl", function ($scope, service) {
		console.log(service);
        var store = this;
	
		store.reportLevels = service.getReportLevels();		    
		store.regionList =  service.regionList();
		store.marketList =  service.marketList();
		store.timeZone = service.timeZone();
		store.mmePools = service.getAllMmePools();
		$scope.model = {};
		$scope.model.userInfo = service.userInfo();
		
		store.slides = ['1', '2', '3'];

		$scope.refresh = function() {
			console.log($scope.model);
		}
		
		// todo: create a directive
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			$("#mme-pool-form [bs-duallistbox]").bootstrapDualListbox({
				preserveSelectionOnMove: 'moved',				
				moveOnSelect: false
			});
			
			
			 $('.your-class').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true
			});
				
		});
	})
