'use strict';

angular.module('frontRoomApp.directives', [])
	.directive('videoFrame', function() {

		return {
			restrict: 'E',
			scope: {
				url : '@'
			},
			templateUrl: 'templates/video/videoframe.html'
			
		}
	})
	.directive('commentBlock', function() {

		return {
			restrict: 'E',
			scope: {
				comments: '='
			},
			templateUrl: 'templates/comments/commentblock.html'
		}
	})
	.directive('titleBlock', function() {

		return {
			restrict: 'E',
			scope: {
				playlist: '='
			},
			templateUrl: 'templates/misc/titleblock.html'
		}
	})
	.directive('tiles', function() {

		return {

			restrict: 'E',
			scope: {
				tiles: '=',
			},
			templateUrl: 'templates/tiles/tiles.html',
			controller: 'tileCtrl'

		}

	});