var app = angular.module("3dportraitApp");

app.service('userService', ["$http", "Backand", function($http, Backand) {

    var vm = this;


    vm.getUsers = function(name, sort, filter, pageSize, pageNumber) {

            var params = {
                pageSize: pageSize || 20,
                pageNumber: pageNumber|| 1,
                filter: filter || '',
                sort: sort || ''
            };
            return Backand.object.getList(name, params);
    };

    vm.signOut = function () {
        return Backand.signout()
    };

    vm.signIn = function (username, password) {
        return Backand.signin(username, password)
    };

    vm.getUserInfo = function () {
        return Backand.user.getUserDetails()
    }
}]);