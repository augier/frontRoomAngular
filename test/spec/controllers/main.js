'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('frontRoomApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a title', function () {
    expect(scope.playlistName).toBe("youtube");
  });

  it('should have 2 comments', function () {
    expect(scope.comments.length).toBe(2);
  })
});
