angular.module("chart", [{
    name: "webService",
    files: ["js/service.js"]
	},
	{
    name: "slick",
    files: ["bower_components/angular-slick/dist/slick.js"]
	}
])
    .controller("ChartCtrl", function ($scope, service) {
        var store = this;
		
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
  autoplay: true,
  autplaySpeed: 2000
});
			console.log("Finished!");
		});

		$scope.getChart = function (e) {
			var x = e.highcharts({
				title: {
					text: '',
					x: -20 //center
				},
				subtitle: {
					text: '',
					x: -20
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				},
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					valueSuffix: '°C'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Tokyo',
					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				}, {
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				}, {
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
				}]
			});
		}
		
		store.news = service.getListOfNews();
	
		store.slides = [
				'static/chart1.png',
				'static/chart2.png',
				'static/chart3.png',
				'static/chart4.png',
				'static/chart5.png',
				'static/chart6.png',
				'static/chart7.png',
				'static/chart8.png',
				'static/chart9.png',
				'static/chart10.png',
				'static/chart11.png',
				'static/chart12.png',
				'static/chart13.png',
				'static/chart14.png',
				'static/chart15.png',
			];	
			
		
		
		$scope.myInterval = 5000;
		  var slides = $scope.slides = [];
		  $scope.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
			  image: 'http://placekitten.com/' + newWidth + '/300',
			  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
				['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		  };
		  for (var i=0; i<4; i++) {
			$scope.addSlide();
		  }
	})
	.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});
