'use strict';

var loginCtrl = angular.module('frontRoomApp');


loginCtrl.controller('LoginCtrl', ['$location', '$http', '$scope', function ($location, $http, $scope) {

	console.log('code: ' + JSON.stringify($location));
	console.log('code: ' + $location.search().code);
}]);