'use strict';

var frontRoomApp = angular.module('frontRoomApp', [
  'ui.router',
  'frontRoomApp.controllers',
  'youtube',
  'frontRoomApp.directives',
  'frontRoomApp.services'
  ]);

frontRoomApp.config(function ($stateProvider, $urlRouterProvider, $routeProvider) {

  $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });

  $routeProvider.when('/detail/:id', {
    templateUrl: 'views/detail.html',
    controller: 'tileDetailCtrl'
  })

  $routeProvider.when('/soundcloud', {
      templateUrl: 'views/main.html',
      controller: 'SoundcloudCtrl'
    });

  $routeProvider.when('/loggedinsuccess', {
    templateUrl: 'views/main.html',
    controller: 'LoginCtrl',
  })

  $routeProvider.otherwise({
        redirectTo: '/'
    });
  //
  // // Now set up the states
  // $stateProvider
  //   .state('posts', {
  //     url: "/posts",
  //     views: {
  //       templateUrl: "views/main.html",
  //       controller: 'MainCtrl'
  //     }
  //   })
  //   .state('posts.detail', {
  //     url: "/post:id",
  //     templateUrl: "views/post.html"
  //   });

  //   // For any unmatched url, redirect to /state1
  // $urlRouterProvider.otherwise("/posts");

})