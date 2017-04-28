var app = angular.module("3dportraitApp");

app.controller("logoutController", ["$scope", "$location", "userService", function($scope, $location, userService){

$scope.signout = function() {
    userService.signOut().then(function(res){
    });
    $location.path("/login")

};

}]);
