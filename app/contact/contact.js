var app = angular.module("3dportraitApp");

app.controller("contactController", ["$scope", "userService", "objectService", function($scope, userService, objectService) {

    $scope.test = "contact";

    $scope.submitForm = function (name) {

        userService.getUsers("items").then(function(res){
            console.log(res.data)
        })
    };

    $scope.signIn = function(username, password) {
        userService.signIn(username, password).then(function(res){
            console.log("signin succeeded with user :" + res.data.username);
            console.log(res.data);
        })
    };

    $scope.signOut = function() {
        userService.signOut().then(function(res){
            console.log(res.data)
        })
    };

    $scope.newObject = function(object) {
        objectService.createObject(object)
    };

    $scope.getInfo = function() {
        userService.getUserInfo().then(function(res){
            console.log(res.data)
        })
    };

    $scope.signUp = function (firstName, lastName, email, password, confirmPassword) {
        userService.signUp(firstName, lastName, email, password, confirmPassword).then(function(res){
            console.log(res.data)
        })
    };

}]);