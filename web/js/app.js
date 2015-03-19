var app = angular.module('lte-web', ['ui.router', 'ui.bootstrap', 'oc.lazyLoad', 'inform']);
app.run(
	['$rootScope', '$state', '$stateParams',
		function ($rootScope, $state, $stateParams) {
			$rootScope.userId = "gundaja";
			$rootScope.appName = "LTE Performance Tool";
			$rootScope.appType = "ALU";
			$rootScope.currentDate = new Date();
			// It's very handy to add references to $state and $stateParams to the $rootScope
			// so that you can access them from any scope within your applications.For example,
			// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
			// to active whenever 'contacts.list' or one of its decendents is active.
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			
			
			var res;
			window.onresize = function(event) {	
				if (res){clearTimeout(res)};
				res = setTimeout(function(){
					console.log("resize triggered");
					$rootScope.$broadcast('window-resize-event');
				},200);
			};			
		}
	])

// Common directive	
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
})

.directive('inlineLabel', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: false,
        scope: {
            label: '@placeholder',
            pos: '@pos'
        },
        link: function (scope, element, attrs) {
            //default
            if (!attrs.pos) {
                scope.pos = 'top'
            }

            $(element).parents('.form-group').addClass('floating-label-form-group');
            $(element).before('<label class="' + scope.pos + '">' + scope.label + '</label>');

            $('body')
                .on("input propertychange", ".floating-label-form-group", function (e) {
                $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
            });
            $(element)
                .on("focus", function () {
                $(this).addClass("floating-label-form-group-with-focus");
            });
            $(element)
                .on("blur", function () {
                $(this).removeClass("floating-label-form-group-with-focus");
            });

        }
    };
})

.config(['datepickerConfig', function(datepickerConfig) {
    datepickerConfig.showWeeks = false;
	datepickerConfig.datepickerPopup = "dd-MM-yyyy";
	datepickerConfig.startingDay = 1;

}])

.config(function(informProvider) {

    var myDefaults = {
      /* default time to live for each notification */
      ttl: 2000,
      /* default type of notification */
      type: 'info'
    };

    informProvider.defaults(myDefaults);
	


  })
	
// Set 	
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
			events: true,
			debug: true
		});
}])

.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url : '/home',
		views : {
			'' : {
				templateUrl : 'partials/home.html'
			},			
			'home@news' : {
				templateUrl : 'partials/home-news.html',
				controller : "HomeCtrl as news",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"home",
							files:["js/home.js"]
						})
					}
				}
			},
			
			'home@perf-charts' : {
				templateUrl : 'partials/home-perf-chart.html',
				controller : "ChartCtrl as perf",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"chart",
							files:["js/chart.js",									
									"bower_components/slick-carousel/slick/slick.css",
									"bower_components/slick-carousel/slick/slick-theme.css",
									"bower_components/slick-carousel/slick/slick.js",
									"bower_components/angular-slick/dist/slick.js"
							]
						})
					}
				}
			},		
		}
	})
	
	// Structure Ad Hoc
	.state('sah', {
		url : '/sah',
		views : {
			'' : {
				templateUrl : 'partials/sah.html',
				controller : "SahCtrl as s",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"sah",
							files:["js/sah.js"]
						})
					}
				}
			}			
		}
	})
	
	// Structure Ad Hoc (Mobile)
	.state('sah-mobile', {
		url : '/sah-mobile',
		views : {
			'' : {
				templateUrl : 'partials/sah-mobile.html',
				controller : "SahCtrl as s",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"sah",
							files:["js/sah-mobile.js",									
									"bower_components/slick-carousel/slick/slick.css",
									"bower_components/slick-carousel/slick/slick-theme.css",
									"bower_components/slick-carousel/slick/slick.js",
									"bower_components/angular-slick/dist/slick.js"
							]
						})
					}
				}
			}			
		}
	})
	
	
	// Report Browser
	.state('reportBrowser', {
		url : '/reportBrowser',
		views : {
			'' : {
				templateUrl : 'partials/reportBrowser.html',
				controller : "ReportBrowserCtrl as rb",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"reportBrowser",
							files:["js/reportBrowser.js"]
						})
					}
				}
			}			
		}
	})	
	
	// Report Browser
	.state('scan', {
		url : '/scan',
		views : {
			'' : {
				templateUrl : 'partials/scanTrend.html',
				controller : "ScanTrendCtrl as scan",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"scan",
							files:["js/scanTrend.js"]
						})
					}
				}
			}			
		}
	})	
	
	.state('home.list', {
		url : '/list',
		templateUrl : 'partials/partial-home-list.html',
		controller : "HomeCtrl as home",
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

	.state('userprofile', {
		url : '/user-pref',
		views : {
			'' : {
				templateUrl : 'partials/pref.html'
			},
			
			'profile-tab@user-profile' : {
				templateUrl : 'partials/pref-user-profile.html',
				controller : "UserPrefCtrl as userPref",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"preference",
							files:["js/userPref.js"
								]
						})
					}
				}
			},
			
			'profile-tab@mme-pool' : {
				templateUrl : 'partials/pref-mme-pool.html',
				controller : "MmePoolCtrl as mmePool",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"mmepool",
							serie: true,
							files:[
							"bower_components/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.js",							
							"bower_components/bootstrap-duallistbox/dist/bootstrap-duallistbox.css",												
							"js/mmepool.js"
							]
						})
					}
				}
			},		
		}

	})
	
	.state('cellgroups', {
		url : '/cg',
		templateUrl : 'partials/partial-home.html'
	})
	
	// .state('userprofile', {
		// url : '/userProfile',
		// templateUrl : 'partials/pref-user-profile.html',
		// controller : "userPrefCtrl as user",
        // resolve:{
            // store:function($ocLazyLoad){
                // return $ocLazyLoad.load(
                // {
                    // name:"user",
                    // files:["js/userPref.js"]
                // })
            // }
        // }
	// })
	


	// nested list with just some random string data
	.state('home.paragraph', {
		url : '/paragraph',
		template : 'I could sure use a drink right now.'
	})

	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	.state('about', {
		url : '/about',
		templateUrl : 'partials/about.html'		
	});
});