angular.module('lte-web')
.directive('formCheck', function () {
    return {
        restrict: 'AE', //E = element, A = attribute, C = class, M = comment         
        scope: {
            ngModel: '=',
			label: '@'
        },
        link: function(scope, element, attrs) {
			scope.errorClass = '{error: form.' + attrs.id + '.$invalid}';
			scope.errorRequired = 'form.' + attrs.id + '.$error.required';
			scope.valid = 'form.' + attrs.id + '.$valid';
        },
        replace: true,
				template : 	'<div class="form-group" ng-class="{{errorClass}}">' +
					'	<label for="{{id}}">{{label}}</label>' +
					'	<input type="text" id="{{id}}" name="reportLevel" ng-model="ngModel" disabled required>' +
					'	<span ng-show="{{!ngModel}}" class="help-inline glyphicon glyphicon-exclamation-sign text-danger"></span>' +
					'	<span ng-show="{{ngModel}}" class="help-inline glyphicon glyphicon-ok text-success"></span>' +					
					'</div>'
		
		
		// '<div class="panel panel-default" style="padding:0px">'
            // + '<div class="panel-body" style="padding-top:-30px">'
            // + '  <highchart config="ngModel"></highchart>'
            // + '</div>'
            // + '<div class="dropdown" id="chart-drop-down" ng-show="ngModel.showMenu" style="padding:5px; margin-top:-20px;">'
            // + '    <a href="#" class="btn-xs dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-cog"></span></a>'
            // + '       <ul class="dropdown-menu dropup" style="padding: 15px; min-width: 600px; top: -185px; left: auto;">'
            // + '               <li>'
            // + '               <p>Update title and subtitle</p>'
            // + '               <li class="divider"></li>'
            // + '                       <div class="row">'
            // + '                               <div class="col-md-12">'
            // + '                                       <form class="form" role="form">'
            // + '                                               <div class="form-group">'
            // + '                                                       <label class="sr-only" for="title">Password</label>'
            // + '                                                       <input class="form-control"'
            // + '                                                               id="title" placeholder="Enter title" '
            // + '                                                               ng-model="ngModel.title.text">'
            // + '                                               </div>'
            // + '                                               '
            // + '                                               <div class="form-group">'
            // + '                                                       <label class="sr-only" for="subtitle">Password</label>'
            // + '                                                       <input class="form-control"'
            // + '                                                               id="subtitle" placeholder="Sub title" '
            // + '                                                               ng-model="ngModel.subtitle.text">'
            // + '                                               </div>'
            // + '                                       </form>'
            // + '                               </div>'
            // + '                       </div>'
            // + '               </li>'
            // + '       </ul>'
            // + '    <a href="#" class="btn-xs" title="Click to export as image" ng-click="ngModel.print()"><span class="glyphicon glyphicon-export"></span></a>'
            // + '    <a href="{{ngModel.file_url}}" class="btn-xs" title="Click to download csv"><span class="glyphicon glyphicon-download-alt"></span></a>'
            // + '</div>'
            // + '</div>'

    };

});
