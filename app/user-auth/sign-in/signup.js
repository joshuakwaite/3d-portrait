var app = angular.module("3dportraitApp");

app.controller("signupController", ["$scope", "$location", "userService", function($scope, $location, userService){



            $scope.signup = function (user) {
                if (user.confirmPassword !== user.password) {
                    $scope.passwordMessage = "Your passwords do not match!"
                } else {
                    userService.signUp(user.firstName, user.lastName, user.email, user.password, user.confirmPassword, {"phoneNumber": user.phoneNumber}).then(function (res) {
                        $location.path("/home");
                    })
                        .catch (function(res) {
                            alert("This email has already signed up, please log in.")
                            $location.path("/login")
                        })
                };

            };




}]);
