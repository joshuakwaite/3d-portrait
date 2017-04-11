var app = angular.module("3dportraitApp");

app.service('objectService', ["$http", "Backand", "userService", function($http, Backand, userService) {

    var vm = this;

    vm.createObject = function(object) {

        userService.getUserInfo().then(function(res){
             Backand.object.create("items", {
                "name": object.name,
                "description": object.description,
                "user": res.data.userId
            }).then(function(response){
                console.log(response)
             });
        })
    };
}]);