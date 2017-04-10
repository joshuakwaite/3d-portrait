var app = angular.module("3dportraitApp");

app.service('objectService', ["$http", "Backand", "userService", function($http, Backand, userService) {

    var vm = this;

    vm.createObject = function(object) {

    return Backand.object.create("items", {
        "name": object.name,
        "description": object.description,
        "user": userService.getUserInfo().then(function(res) {
            return res.data.userId
        })
    });

    };

}]);