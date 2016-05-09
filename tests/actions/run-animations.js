var browserPerf = require('browser-perf');

module.exports = [
	function startAnimations(browser) {
		var actionPromise = browser.sleep(500)
			.then(function() {
				return browser.elementByCssSelector("#box1")
			})
			.then(function(box1) {
				// Tap sampleLink
				return box1.tap();
			})
			.then(function() {
				return browser.sleep(250);
			})
			.then(function() {
				return browser.elementByCssSelector("#box2")
			})
			.then(function(box2) {
				// Tap sampleLink
				return box2.tap();
			})
			.then(function() {
				// Let the animation run for a second
				return browser.sleep(1000);
			});

		return actionPromise;
	}
];

