angular.module('webService', [])
	.factory('service', function($http) {
     
		var factory = {}; 
		
		factory.getUserReportsPerRegion = function() {
                   return $http.get('static/report.json', { cache: true }).then(function(result) {
                       return result;
                   });
        },
		
		factory.getReportsByUser = function(userid) {
			var url = 'static/user_report.json';
			if (userid != "Alimoh5") {
				url = 'static/user_report1.json';
			}
				
			return $http.get(url, { cache: true }).then(function(result) {
			   return result;
			});
        }

		
		factory.getAllMmePools = function() {
			return  [{value:"15", text: "Central Texas[64132]"},
					{value:"13", text: "Houston/Gulf Coast[64120]"},
					{value:"6", text: "Mountain[64010]"},
					{value:"18", text: "New England[64056]"},
					{value:"2", text: "New York Metro[64078]"},
					{value:"10", text: "Ohio/Pennsylvania[64240]"},
					{value:"12", text: "Philadelphia Tri-State[64096]"},
					{value:"9", text: "South Central[64180]"},
					{value:"1", text: "Southwest[64020]"},
					{value:"25", text: "Upstate New York[64070]"},
					{value:"3", text: "Washington/Baltimore/Virginia[64106]"}];

		}
		
		factory.getStatus = function() {
				return ["Complete", "Failed", "Running"];
			}
			
		factory.getReportLevels = function() {
				return ["MME Pool", "MME", "MME Service", "MME Service Member", "MME Cabinet", "MME Shelf"];
			}
	 
		factory.regionList = function() {
				return ["Central Texas", "Houston/Gulf Coast", "Mountain"];
			}
	 
		factory.marketList = function() {
				return ["LA Shreveport", "TX Austin"]
			}
			
		factory.timeZone = function() {
				return ["Hawaiian", "Alaskan", "Pacific", "Mountain", "Central", "Eastern"]
			}
			
		factory.userInfo = function() {
				return {"firstName": "Jayson",
						"lastName": "Gundayao",
						"mobileNumber": "9255961383",
						"maxNo": "5",
						"currentDiskUsage": "0",
						"maxDiskUsage": "100",
						"purgeLimit": "20",						
						"accessLevel": "USER",
						"status": "Active",
						"emailAddress": "Jayson.Gundayao@vzw.com",
						"regionId" : "Central Texas",
						"marketId":"TX Austin"
						}
			}
			
		factory.getListOfNews = function() {
			return [{"area":160,"areaName":"Alaska","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":5,"areaName":"Carolinas/Tennessee","class":"bus.home.NewsModel","highlightFlag":"Y","news":[]},{"area":4,"areaName":"Florida","class":"bus.home.NewsModel","highlightFlag":"Y","news":["Test.","Test"]},{"area":6,"areaName":"Georgia/Alabama","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":7,"areaName":"Great Plains","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":8,"areaName":"Illinois/Wisconsin","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":21,"areaName":"Kansas/Missouri","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":9,"areaName":"Michigan/Indiana/Kentucky","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":44,"areaName":"MidWest IL/WI LRA","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":2,"areaName":"N. California","class":"bus.home.NewsModel","highlightFlag":"N","news":["This is line1.","This is line2.","This is line3."]},{"area":1,"areaName":"Pacific Northwest","class":"bus.home.NewsModel","highlightFlag":"N","news":["This is line1.","This is line2.","This is line3."]},{"area":3,"areaName":"S. California","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":42,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":-9999,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":["Irisview exports are delayed by 4 hours to maintain data integrity and are imported at the ENB level. Irisview pegs can only be reported at the ENB level or higher."]},{"area":61,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":[]}]
		}
		
		// Returns report types for scan trend
		factory.getScanTrendTypes = function() {
			return ["Enodeb Perf", "UL Noise Heat Map", "RSSI_Delta"];
		}

		return factory;
	})
	
	.directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    }
})



