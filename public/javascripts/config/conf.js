exports.config = {
    directConnect : true,
    timeout: 20000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['../features/*.feature'],
    cucumberOpts: {
        require: '../features/step_definitions/step_definition.js'
    }
    // ,
    // onPrepare: function() {
    //     browser.driver.manage().window().maximize();
    // }
};
