// Karma configuration
// Generated on Fri Jul 17 2015 22:40:09 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser // with webpack this in now just a single file
    files: [
        { /*'change to the spec bundle',*/ watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],

    /* what should karma do with matching files before moving on */
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // use webpack and sourcemaps to preprocess the spec bundle file
    preprocessors: {
        'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack :{
        devtool: 'inline-source-map',
        module: {
            loaders: [
                /* add the appropriate loaders */
                /* almost the same as the webpack.config */
            ]
        },

        stylus: {
            use: [require('jeet')(), require('rupture')()]
        }
    },

    webpackServer: {
        noInfo: true
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
