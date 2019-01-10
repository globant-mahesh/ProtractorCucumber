exports.config = {
	// setting to launch tests directly without selenium server
	directConnect : false,
	// setting time outs
	timeout : 20000,
	getPageTimeOut : 200000,
	allScriptsTimeout : 500000,
	baseUrl : "https://www.copaair.com",
	capabilities : {
		'browserName' : 'chrome',
		'chromeOptions' : {
			'args' : [ '--start-maximized', 'disable-infobars' ]
		}
	},
	// setting framework
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),
	// setting protractor to ignore uncaught exceptions to take care by
	// protractor-cucumber-framework
	ignoreUncaughtExceptions : true,
	specs : [ '../features/*.feature' ],
	cucumberOpts : {
		require : [ '../features/step_definitions/step_definition.js' ],
		tags : false,
		format : 'pretty',
		profile : false,
		'no-source' : true
	},
	onPrepare : function() {
//		browser.driver.manage().window().maximize();
//		browser.ignoreSynchronization = true;
	}
};
