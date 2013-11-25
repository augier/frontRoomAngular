'use strict';

var frontRoomApp = angular.module('frontRoomApp', []);

frontRoomApp.config(function ($routeProvider) {

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