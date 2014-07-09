'use strict';

//service style, probably the simplest one
 var deserialiseUserService = myApp.service('deserialseUserService', function() {
    this.sayHello = function() {
        return "Hello, World!"
    };
});