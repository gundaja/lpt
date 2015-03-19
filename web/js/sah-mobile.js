angular.module("sah", [{
    name: "webService",
    files: ["js/service.js", ]
	},
	{
    name: "ui.select",
    files: ["bower_components/angular-ui-select/dist/select.css", "bower_components/angular-ui-select/dist/select.js"]
	},	
	{
    name: "slick",
    files: ["bower_components/angular-slick/dist/slick.js"]
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
		
		$scope.setSlidePosition = function(pos) {
			console.log("pos: " + pos);
			$(".slider").slickGoTo(pos);
		}	
		
		// todo: create a directive
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			
			$(".slider")
			.slick({
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 5,
			  width: '250px',
			  height: '250px',
			  autoplay: false,
			  autplaySpeed: 2000
			});
		});
	})
	
	
