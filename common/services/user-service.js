var app = angular.module("3dportraitApp");

app.service('userService', ["$http", "Backand", function($http, Backand) {

    var self = this;

    this.savedUser = null;


    this.getUsers = function(name, sort, filter, pageSize, pageNumber) {

            var params = {
                pageSize: pageSize || 20,
                pageNumber: pageNumber|| 1,
                filter: filter || '',
                sort: sort || ''
            };
            return Backand.object.getList(name, params);
    };

    this.signUp = function (firstName, lastName, email, password, confirmPassword, phoneNumber) {
        return Backand.signup(firstName, lastName, email, password, confirmPassword, phoneNumber)
                .then(function(res) {
                })

    }

    this.signOut = function () {
        return Backand.signout()
    };

    this.signin = function (username, password) {
        return Backand.signin(username, password)
    };

    this.getUserInfo = function () {
        Backand.user.getUserDetails().then(function(response) {
            Backand.object.getOne("users", response.data.userId).then(function(res) {
                self.savedUser = res.data
            })
            // self.savedUser = response.data;
        })
    }

}]);