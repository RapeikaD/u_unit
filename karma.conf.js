module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        preprocessors: {
            './scripts/*.js': ['coverage']
        },
        files: [
            './scripts/*.js',
        ],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        singleRun: true,
        color: true,
        browsers: ['ChromeHeadless'],
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'html'
                }
            ]
        }
    })
};