'use strict';

var mainCtrl = angular.module('frontRoomApp');


mainCtrl.controller('MainCtrl', ['$http', '$scope', 'youtubePlayerApi' , function ($http, $scope, youtubePlayerApi) {
    console.log('HELLO: ' + JSON.stringify($http));
    $scope.playlist = {};
	$scope.playlist.name = 'youtube';
	$scope.playlist.description = 'All posts from our frontRoom colaborators linked from youtube';
	$scope.embedCode = '<iframe width="560" height="315" src="//www.youtube.com/embed/BHBvoBti_eg?list=PLv29JdQFelVbvIsLoft3otKMXYmJJnxYl" frameborder="0" allowfullscreen></iframe>';
	$scope.playlist.url = '//www.youtube.com/embed/BHBvoBti_eg?list=PLv29JdQFelVbvIsLoft3otKMXYmJJnxYl';
	$scope.comments = [
		{
			comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, amet, eum rem expedita officiis earum mollitia eligendi natus quos incidunt? Vitae corporis error corrupti aliquam illum deserunt eum ad repellat?',
			name: 'Chris Augier',
			date: 'Just now'
		},
		{
			comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, amet, eum rem expedita officiis earum mollitia eligendi natus quos incidunt? Vitae corporis error corrupti aliquam illum deserunt eum ad repellat?',
			name: 'Chelsea Robinson',
			date: 'A week ago'
		}
	];

	$scope.login = function(){
		console.log('login pressed');
		$http.get('http://localhost:3000/auth/facebook').success(function(response){
			console.log('response: ' + response);
		})
	};

	mainCtrl.test = function(word){
		$scope.playlistName = 'argh!' + word;
	};

}]);