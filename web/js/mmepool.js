angular.module("mmepool", [{
    name: "webService",
    files: ["js/service.js", 
			"bower_components/select2/select2.js"]
	}]
	)
    .controller("MmePoolCtrl", function ($scope, service) {
		console.log(service);
        var store = this;
	
		store.regionList = service.regionList();		    
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
	.directive('multiselectDropdown', [function() {
		return function(scope, element, attributes) {

			element = $(element[0]); // Get the element as a jQuery element

			// Below setup the dropdown:

			element.multiselect({
				option1: 123,
				option2: "abcd",
				// etc.
			})

			// Below maybe some additional setup
		}
	}]);

