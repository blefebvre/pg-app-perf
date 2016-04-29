var browserPerf = require('browser-perf');
var scrollActions = require('./actions/scroll-article-page.js');
var metrics = require('./metrics/metrics.js');
var util = require('util');

var testsScriptDir = __dirname;

var options = {
	// Use Appium port
	selenium: 'http://localhost:4723/wd/hub',
	browsers: [
		{
			// Important!! Change to your app's name
			'app': testsScriptDir + '/../platforms/ios/build/emulator/1-scroll.app',
			// Important!! Change to your app's bundleId
			'bundleId': 'com.bruce.slow.scroll',
			'platformName': 'iOS',
			'platformVersion': '9.3',
			'deviceName': 'iPhone 6s Plus',
			'autoWebview': true
		}
	],
	// Use the preScript to navigate to the area we want to test
	//preScript: [],

	// We will scroll a specific element for the test action
	// actions defaults to scroll
	//actions: scrollActions,
	metrics: metrics
};

// First param is the URL to test - N/A for Cordova apps
console.log('Starting iOS tests');
browserPerf(null, 
	function(err, res){
		if (err) {
			return console.error('Error: ' + err);
		}
		// else
		console.log("START RESULTS");
		console.log(util.inspect(res, {showHidden: false, depth: null}));
		console.log("END RESULTS");
	}, 
	options);