var app = angular.module("3dportraitApp");

app.controller("signupController", ["$scope", "userService", function($scope, userService){

    $scope.signup = function (user) {
        userService.signUp(user.firstName, user.lastName, user.email, user.password, user.confirmPassword).then(function (res) {
            console.log(res.data)
        })
    };

}]);
