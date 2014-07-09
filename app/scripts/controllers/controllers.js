'use strict';

angular.module('frontRoomApp.controllers', [])
	.controller('tileCtrl', function($scope, myServices) {
		
		myServices.postsService.getPosts()
		.then(function(posts) {

			$scope.posts = posts;

		});
		

	})

	.controller('tileDetailCtrl', function($scope, $routeParams, myServices) {

		myServices.postsService.getPosts($routeParams.id)
		.then(function(post) {

			$scope.post = post;

		});

	});