var app = angular.module("3dportraitApp");

app.controller("loginController", ["$scope", "$location", "userService", function($scope, $location, userService){

$scope.login = function (user) {
    if (user === undefined) {
        $scope.loginMessage = "Username and password are required"
    }
    userService.signin(user.username, user.password)
        .then(function(res) {
        console.log("signin succeeded with user :" + res.data.username);
        $location.path("/home")



    })
        .catch(function(res) {
            $scope.loginMessage = "Invalid username or password"
        })
}



}]);
