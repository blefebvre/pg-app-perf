pg-app-perf
===========

## Requirements

- node `>= 4.3.0`
- PhoneGap cli `>= 6.2.0`
- PhoneGap Developer app
- (iOS) Appium `== 1.5.2`
- (iOS) Xcode `== 7.3`
- (Android) ChromeDriver `== 2.21`

## Run

	$ npm install
	$ phonegap serve

## browser-perf Tests

Build the app for each platform at least once:

	$ phonegap build ios && phonegap build android

Run the browser-perf tests.

#### Test: Scrolling

iOS

	$ node tests/ios/1-slow-scroll.js
	$ node tests/ios/1-fast-scroll.js

Android

	$ node tests/android/1-slow-scroll.js
	$ node tests/android/1-fast-scroll.js


#### Animation

## Appendix

Find available install targets:

	$ phonegap run --list -d

