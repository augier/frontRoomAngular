'use strict';

var mainCtrl = angular.module('frontRoomApp');


mainCtrl.controller('MainCtrl', function ($scope) {
    
	$scope.playlistName = 'youtube';
	$scope.playlistDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eveniet quos architecto rerum quidem impedit omnis quod aspernatur vitae assumenda quibusdam unde explicabo eos sapiente minus inventore esse nihil tempora!';
	$scope.embedCode = '<iframe width="560" height="315" src="//www.youtube.com/embed/BHBvoBti_eg?list=PLv29JdQFelVbvIsLoft3otKMXYmJJnxYl" frameborder="0" allowfullscreen></iframe>';
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