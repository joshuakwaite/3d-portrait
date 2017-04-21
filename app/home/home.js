var app = angular.module("3dportraitApp");

app.controller("homeController", ["$scope", function ($scope) {

    $scope.test = "home"

        $('#scrollOneButton').click(function () {
            $('html, body').animate({
                scrollTop: $('#scrollOne').offset().top-50
            }, 'slow');
        });

    $("a[href='#!/product']").click(function() {
        $("html, body").scrollTop(0,0);
    });

}]);

