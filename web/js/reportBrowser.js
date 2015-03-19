angular.module("reportBrowser", [{
			name : "webService",
			files : ["js/service.js"]
		}, {
			name : "ngJsTree",
			serie : true,
			files : ["bower_components/jstree/dist/themes/default/style.min.css",
					"bower_components/jstree/dist/jstree.min.js",
					"bower_components/ng-js-tree/ngJsTree.js"]
		},
		{
			name : "ui.grid.selection", 
			serie: true,
			files : ["bower_components/angular-ui-grid/ui-grid.css",
					"bower_components/angular-ui-grid/ui-grid.js"]
		}, 
	])
.controller("ReportBrowserCtrl", function ($scope, $timeout, $interval, service, uiGridConstants) {
	var store = this;
	$scope.textSearch = "";		
	
	$scope.filter = {
		reportname : "",
		datestarted: "",
		status: "",
		dateended: ""
	}	
		
	// $scope.$on('scanner-started', function(event, args) {
		// $('#report-browser-div .panel').height($('#report-browser-div').height());			
	// });
	
	$scope.$on('$viewContentLoaded', function(){
		//Here your view content is fully loaded !!
		console.log($('#report-grid').height());
		$('.gridStyle').height($('#report-browser-div .panel').height()/2);
	});
	
	store.status = service.getStatus();
	$scope.opened = [];
	
	$scope.gridOptions = { enableRowSelection: true, 
						   enableRowHeaderSelection: false,
						   filterOptions: $scope.filterOptions};
						   					   
	$scope.gridOptions.columnDefs = [
			{ name: 'reportname', displayName: "Report Name", width: 150 },
			{ name: 'username', displayName: "User Name", width: 150},
			{ name: 'datestarted', displayName: "Date Started", width: 150 },
			{ name: 'dateended', displayName: "Date Ended", width: 150 },
			{ name: 'status', width: 150 },
			{ name: 'csv' },
			{ name: 'pdf' },
			{ name: 'applet' },
			{ name: 'rpt' },
			{ name: 'pid', width: 100 }			
	];
	
	$scope.change = function() {	
		$scope.gridOptions.data = $scope.originalDataSet.filter( function(item) {		
		
			console.log($scope.filter.datestarted + ' ' + item.datestarted);
			
			return (item.reportname.indexOf($scope.filter.reportname)>-1 && 
			item.status.indexOf($scope.filter.status)>-1 &&
			new Date(item.datestarted) >= $scope.filter.datestarted);			
		});
	}
	
	$scope.gridOptions.multiSelect = false;
	$scope.gridOptions.modifierKeysToMultiSelect = false;
	$scope.gridOptions.noUnselect = true;
	$scope.gridOptions.onRegisterApi = function( gridApi ) {
		$scope.gridApi = gridApi;
		
		gridApi.selection.on.rowSelectionChanged($scope, function(row){
			var msg = 'row selected ' + row;
			console.log(row);
		});
	};
 
	$scope.toggleRowSelection = function() {
		$scope.gridApi.selection.clearSelectedRows();
		$scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
		$scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
	};
	
	$scope.resize = function () {
		$('#jtree').height($('#report-browser-div').height() - 150);
		
		// TODO: fix this
		$('.gridStyle').css('height', ($('#report-browser-div').height() - 250) + 'px');
		$('.ui-grid-viewport').css('height', ($('#report-browser-div').height() - 280) + 'px');	
	};
 
	service.getUserReportsPerRegion().then(function(result) {		
		$scope.resize();
		
		$('#jtree').jstree({ 
		'core' : {
			'data' : result.data
		},		
		"plugins" : [
			"search","types", "wholerow"
		],
		"ui": {
            "select_limit": 1,
        }
		});
	});
	
	$scope.originalDataSet = [];
	
	$scope.initInputs = function() {
		$scope.filter = {
			reportname : "",
			datestarted: "",
			status: store.status[0],
			dateended: ""
		}
	}
	
	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();
	
	
	$scope.open = function($event, instance) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened[instance] = true;		
	};
	
	$scope.format = 'MM/dd/yyyy';

	$scope.dateOptions = {
		formatYear: 'yyyy',
		startingDay: 1,
		clearText: 'Clear'
	};
	
	$scope.refreshGrid = function(data) {		
		$scope.originalDataSet = angular.copy(data, []);
		$scope.gridOptions.data = data;
		$interval( function() {
			$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
			$scope.initInputs();
			}, 0, 1);		
		return;
	}	
	
	$('#jtree').on("changed.jstree", function (e, data) {
		console.log("The selected nodes are:");
		console.log(data.selected);		
		console.log(e);
		
		
		service.getReportsByUser(data.selected).then(function(result) {			
			$scope.refreshGrid(result.data.reports.report);				
		});
	 });
	
	$scope.treeSearch = function() {			
		$("#jtree").jstree(true).search($scope.textSearch);
		
		// Scroll to the first search item
		var el = $('#jtree .jstree-search')[0];
		if (el) {
			var pos = el.offsetTop;		
			$("#jtree").scrollTop(pos);
		}
	}
})