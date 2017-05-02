var app = angular.module("3dportraitApp");

app.controller("accountController", ["$scope", "userService", function ($scope, userService) {

    $scope.UserService = userService;


    console.log(userService.savedUser)
}]);

