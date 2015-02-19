
angular.module("lpt-web", ["ui.router","oc.lazyLoad"])
    .config(function($stateProvider){
	$stateProvider
	.state('/',{
		templateUrl: "home.html",
		controller: "HomeCtrl as home",
		resolve:{
			store:function($ocLazyLoad){
				return $ocLazyLoad.load(
				{
					name:"home",
					files:["js/home.js"]
				})
			}
		}
	})
	.state('scanTrend', {
		url: "/scanTrend",
        templateUrl: "partials/scanTrend.html",
		resolve:{
			store:function($ocLazyLoad){
				return $ocLazyLoad.load(
				{
					name:"scanTrend",
					files:["js/scanTrend.js"]
				})
			}
		}
	})
	.state('route2', {
		url: "/route2",
		views: {
			"viewA": {
				template: "route2.viewA"
			},
			"viewB": {
				template: "route2.viewB"
			}
		}
	})
	.state('about', {
	  url: '/about',

	  // Showing off how you could return a promise from templateProvider
	  templateProvider: ['$timeout',
		function (        $timeout) {
		  return $timeout(function () {
			return '<p class="lead">UI-Router Resources</p><ul>' +
					 '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
					 '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
					 '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
					 '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
					 '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
				   '</ul>';
		  }, 100);
		}]
	})
	})	
    .controller("AppCtrl", function ($scope, $injector, $ocLazyLoad, $state) {
        var app = this;
		$scope.appName = "LPT";
		
		//we can load it when controller is initialized
		$state.go("/");
	
		
        app.click = function () {
		$state.go("/");
            $ocLazyLoad.load({
                name: "store",
                files: [
                    "js/store.js",
					"css/style.css",
					"js/AjaxServices.js"
                ]
            }).then(function () {
                console.log($injector.get("cart"));
            })
        }
    })
	
	.controller("ScanTrendCtrl", function ($scope, $injector, $ocLazyLoad, $state) {
        var app = this;
		$scope.appName = "LPT";
		
		
		
		//we can load it when controller is initialized
		$state.go("/");
	
		
        app.click = function () {
		$state.go("/");
            $ocLazyLoad.load({
                name: "store",
                files: [
                    "js/store.js",
					"css/style.css",
					"js/AjaxServices.js"
                ]
            }).then(function () {
                console.log($injector.get("cart"));
            })
        }
    })