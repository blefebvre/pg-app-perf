PhoneGap Runtime Perf Sample
============================

## About

This repo was created in support of my PhoneGap Day EU talk, which can be [found here](https://docs.google.com/presentation/d/1--nCyt1cERy3VKxX4Hwe9wM0Nvkdk4tkv6Uq-Ju0tkY/edit?usp=sharing). It contains a PhoneGap application that showcases a few performance scenarios - with both fast and slow implementations - and browser-perf test cases to meter them.

## Requirements

- node `>= 4.3.0`
- PhoneGap cli `>= 6.2.0`
- PhoneGap Developer app
- (iOS) Appium `== 1.5.2`
- (iOS) Xcode `== 7.3` 
- (iOS, for real devices) ideviceinstaller: `brew install ideviceinstaller`
- (iOS, for real devices) ios-webkit-debug-proxy: `brew install ios-webkit-debug-proxy`
- (Android) ChromeDriver `== 2.21`


## Run the app

	$ npm install
	$ phonegap serve

## Run the browser-perf tests

Build the app for each platform at least once:

	$ phonegap build ios
	$ phonegap build android

### Test setup

##### iOS

Run appium:

	$ appium

Note, to run the tests on a real device, you will need to run
[ios_webkit_debug_proxy on port :27753](http://appium.io/slate/en/master/?javascript#ios-webkit-debug-proxy.md). Replace `<device UDID>` with yours:

	$ ios_webkit_debug_proxy -c <device UDID>:27753 -d

Make sure UI automation is enabled on the iOS device, via Settings > Developer > "Enable UI Automation". You may need to plug the device in to a machine with Xcode running to enable this menu item.


##### Android

Note: at the time of writing there is an [issue on the browser-perf repo](https://github.com/axemclion/browser-perf/issues/57) regarding Android support.

App must be installed on test device (and running):

	$ phonegap run android --device

Run ChromeDriver:

	$ chromedriver


### Test: Scrolling

##### iOS

Slow scrolling:

	$ node tests/ios/1-slow-scroll.js

Faster scrolling:

	$ node tests/ios/1-fast-scroll.js


##### Android

Run the tests:

	$ node tests/android/1-slow-scroll.js

Note: further work is needed to support Android.


### Test: Animation

##### iOS

Slow animation:

	$ node tests/ios/2-slow-animate.js

Faster animation using top/left:

	$ node tests/ios/2-fast-animate-top-left.js

Fast animation using `transform`:

	$ node tests/ios/2-fast-animate-transform.js


##### Android

Note: further work is needed to support Android.


## Appendix

Find available install targets, including UDIDs of physical devices:

	$ phonegap run --list -d

Build and run the app targeting a specific device UDID: 
	
	$ phonegap run ios --device --target <device UDID> -d