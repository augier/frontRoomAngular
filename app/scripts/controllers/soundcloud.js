'use strict';

angular.module('frontRoomApp')
	.controller('SoundcloudCtrl', function ($scope) {
	$scope.playlist = {};
	$scope.playlist.name = 'soundcloud';
	$scope.playlist.description = 'A playlist containing all tunes posted from soundcloud by frontRoom members';
	$scope.embedCode = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/15504618"></iframe>';
	$scope.playlist.url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/15504618';
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
    
});
