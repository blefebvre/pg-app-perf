// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('IndexController', ['$scope', function($scope) {
  $scope.handleScroll = function() {
    console.log('scrolling!');
  };

  $scope.backToList = function() {
    window.location.href = "../../../index.html";
  };
}]);
