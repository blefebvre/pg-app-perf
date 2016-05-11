pg-app-perf
===========

## Requirements

- node `>= 4.3.0`
- PhoneGap cli `>= 6.2.0`
- PhoneGap Developer app
- (iOS) Appium `== 1.5.2`
- (iOS) Xcode `== 7.3` 
- (iOS, for real devices) ideviceinstaller: `brew install ideviceinstaller`
- (iOS, for real devices) ios-webkit-debug-proxy: `brew install ios-webkit-debug-proxy`
- (Android) ChromeDriver `== 2.21`

## Run

	$ npm install
	$ phonegap serve

## browser-perf Tests

Build the app for each platform at least once:

	$ phonegap build ios && phonegap build android

Run the browser-perf tests.

#### Test: Scrolling

##### iOS

Run appium:

	$ appium

Run the tests. Results will be printed to the console:

	$ node tests/ios/1-slow-scroll.js
	$ node tests/ios/1-fast-scroll.js

Note, to run the tests on a real device, you will need to run
[ios_webkit_debug_proxy on port :27753](http://appium.io/slate/en/master/?javascript#ios-webkit-debug-proxy.md). Make sure to replace `<device UDID>` with yours:

	$ ios_webkit_debug_proxy -c <device UDID>:27753 -d

Make sure UI automation is enabled on the iOS device, via Settings > Developer > "Enable UI Automation".


##### Android

App must be installed on test device (and running):

	$ phonegap run android --device

Run ChromeDriver:

	$ chromedriver

Run the tests:

	$ node tests/android/1-slow-scroll.js
	$ node tests/android/1-fast-scroll.js


#### Animation

## Appendix

Find available install targets:

	$ phonegap run --list -d

