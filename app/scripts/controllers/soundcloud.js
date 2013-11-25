'use strict';

var soundcloudCtrl = angular.module('frontRoomApp');


soundcloudCtrl.controller('SoundcloudCtrl', function ($scope) {

	$scope.playlistName = 'soundcloud';
	$scope.playlistDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eveniet quos architecto rerum quidem impedit omnis quod aspernatur vitae assumenda quibusdam unde explicabo eos sapiente minus inventore esse nihil tempora!';
	$scope.embedCode = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/15504618"></iframe>';
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
