var browserPerf = require('browser-perf');
var preScript = require('./pre-scripts/navigate-to-facilities-page.js');
var scrollActions = require('./actions/scroll-article-page.js');
var metrics = require('./metrics/metrics.js');

var testsScriptDir = __dirname;

console.log('Starting Android tests');

var options = {
	// Use ChromeDriver port
	selenium: 'localhost:9515',
	browsers: [
		{
			"browserName": "android",
			"chromeOptions": {
				// Important!! Use your app's activity and package
				"androidActivity": "com.adobe.insider.AdobeInsider",
				"androidPackage": "com.adobe.insider"
			}
		}
	],
	// Use the preScript to navigate to the area we want to test
	preScript: preScript,
	// We will scroll a specific element for the test action
	actions: scrollActions,
	metrics: metrics
};

// First param is the URL to test - N/A for Cordova apps
browserPerf(null, 
	function(err, res){
		if (err) {
			return console.error('Error: ' + err);
		}
		// else
		console.log(res);
	}, 
	options);