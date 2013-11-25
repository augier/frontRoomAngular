'use strict';

var frontRoomApp = angular.module('frontRoomApp', ['youtube']);

frontRoomApp.config(function ($routeProvider, $youtube) {

  $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });

  $routeProvider.when('/soundcloud', {
      templateUrl: 'views/main.html',
      controller: 'SoundcloudCtrl'
    });

  $routeProvider.otherwise({
        redirectTo: '/'
    });
})