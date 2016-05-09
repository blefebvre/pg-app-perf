pg-app-perf
===========

## Requirements

- node `>= 4.3.0`
- PhoneGap cli `>= 6.2.0`
- appium `== 1.5.2`
- browser-perf `== 1.4.5`
- PhoneGap Developer app
- (iOS) Xcode `== 7.3`

## Run

	$ phonegap serve

## browser-perf Tests

Build the app for iOS at least once:

	$ phonegap build ios

Run the browser-perf tests:

#### Scrolling

	$ node tests/1-slow-scroll.js
	$ node tests/1-fast-scroll.js

#### Animation

## Appendix

Find available install targets:

	$ phonegap run --list -d

