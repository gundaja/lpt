module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'web/bower_components/angular/angular.js',
      'web/bower_components/angular-route/angular-route.js',
      'web/bower_components/angular-mocks/angular-mocks.js',
      'web/components/**/*.js',
      'web/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
