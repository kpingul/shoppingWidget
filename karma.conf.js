// Karma configuration
// Generated on Fri Aug 21 2015 11:28:48 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/slick-carousel/slick/slick.js',
      'bower_components/angular-ladda/dist/angular-ladda.js',
      'bower_components/angular-spinner/angular-spinner.js',
      'bower_components/angular-ui-view-spinner/src/angular-ui-view-spinner.js',
      'bower_components/angular-foundation/mm-foundation.js',
      'src/js/app/app.module.js',
      'src/js/app/shared/slickCarousel.directive.js',
      'src/js/app/app.mainCtrl.js',
      'src/js/app/fruit list/fruitList.controller.js',
      'src/js/app/shared/userData.service.js',
      'src/js/app/single list/singleFruit.controller.js',
      'src/js/app/shared/fruitData.service.js',

      '!src/js/plugins/',
      'tests/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
