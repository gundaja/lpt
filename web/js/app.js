var app = angular.module('lte-web', ['ui.router', 'ui.bootstrap', 'oc.lazyLoad']);
app.run(
	['$rootScope', '$state', '$stateParams',
		function ($rootScope, $state, $stateParams) {
			$rootScope.userId = "gundaja";
			$rootScope.appName = "LPT";
			// It's very handy to add references to $state and $stateParams to the $rootScope
			// so that you can access them from any scope within your applications.For example,
			// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
			// to active whenever 'contacts.list' or one of its decendents is active.
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	])

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
			'home@new' : {
				templateUrl : 'partials/pref-user-profile.html',
				controller : "UserPrefCtrl as userPref",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"preference",
							files:["js/userPref.js"]
						})
					}
				}
			},
			
			'home@perf-charts' : {
				templateUrl : 'partials/pref-mme-pool.html',
				controller : "MmePoolCtrl as mmePool",
				resolve:{
					store:function($ocLazyLoad){
						return $ocLazyLoad.load(
						{
							name:"mmepool",
							files:["js/mmepool.js"]
						})
					}
				}
			},		
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
							files:["js/userPref.js"]
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
							files:["js/mmepool.js"]
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

	// nested list with just some random string data
	.state('home.paragraph', {
		url : '/paragraph',
		template : 'I could sure use a drink right now.'
	})

	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	.state('about', {
		url : '/about',
		views : {
			'' : {
				templateUrl : 'partials/partial-about.html'
			},
			'columnOne@about' : {
				template : 'Look I am a column!'
			},
			'columnTwo@about' : {
				templateUrl : 'partials/table-data.html',
				controller : 'scotchController'
			}
		}

	});

});