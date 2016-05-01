var browserPerf = require('browser-perf');

module.exports = [
	// Wait for a second to let things settle
	browserPerf.actions.wait(1000),
	// Fire scroll action 
	browserPerf.actions.scroll({
		// Find the scrollable element (ion-content in this case).
		// Note the [1]: we're scrolling the second item we find, since 
		// the first will be the first slide (which we swipe past)
		scrollElement: "document.querySelectorAll('ion-content.scroll-content')[0]"
	}),
	// Wait for a second to let things settle
	browserPerf.actions.wait(1000)
];

